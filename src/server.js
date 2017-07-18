import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import expressGraphQL from 'express-graphql';
import React from 'react';
import ReactDOM from 'react-dom/server';
import PrettyError from 'pretty-error';
import App from './components/App';
import Html from './components/Html';
import { ErrorPageWithoutStyle } from './routes/error/ErrorPage';
import errorPageStyle from './routes/error/ErrorPage.css';
import createFetch from './createFetch';
import router from './router';
import assets from './assets.json'; // eslint-disable-line import/no-unresolved
import configureStore from './store/configureStore';
import { setRuntimeVariable } from './actions/runtime';
import config from './config';
import expressRouter from './expressRouter';
import passport from 'passport';
import cookie from 'react-cookie';
import jwt from 'jsonwebtoken';

import EmojiInfo from './components/EmojiInfo';

mongoose.Promise = require('bluebird');
mongoose.connect('localhost:27017/muc');
require('./passport');

const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------

app.use(
  session({
    secret: 'dundundun',
    name: 'My Cookie',
    proxy: true,
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS from client-side
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:80');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


//
// Register API middleware
// -----------------------------------------------------------------------------
app.use('/graphql', expressGraphQL(req => ({
  graphiql: __DEV__,
  rootValue: { request: req },
  pretty: __DEV__,
})));


// post requests for authentication are handled here
app.use('/', expressRouter);

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async (req, res, next) => {
  try {
    
    let authenticated = false;
    await jwt.verify(getToken(req), config.auth.jwt.secret, (err, decoded) => {
      !err && (authenticated = true);
    });

    const css = new Set();

    // The only way to get a static component to the client is by passing it in from the server
    // which... I think is fucking stupid but whatever. You win some you loose some
    const staticEmoji = ReactDOM.renderToStaticMarkup(<EmojiInfo />);

    const initialState = {
      user: req.user || null,
      nav: {
        dropDownNav: false
      },
      map: {
        minInputSelect: true,
        staticComponent: staticEmoji
      },
      auth: {
        authenticated: authenticated
      }
    };

    const store = configureStore(initialState, {
      fetch,
    })

    store.dispatch(setRuntimeVariable({
      name: 'initialNow',
      value: Date.now(),
    }));
    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()));
      },
      // Universal HTTP client
      fetch: createFetch({
        baseUrl: config.api.serverUrl,
        cookie: req.headers.cookie,
      }),
      store,
      storeSubscription: null
    };

    const route = await router.resolve({
      ...context,
      path: req.path,
      query: req.query,
    });

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect);
      return;
    }
    const data = { ...route };
    data.children = ReactDOM.renderToString(
      <App context={context} store={store} >
        {route.component}
      </App>
    );
    data.styles = [
      { id: 'css', cssText: [...css].join('') },
    ];
    data.scripts = [
      assets.vendor.js,
      assets.client.js,
    ];
    if (assets[route.chunk]) {
      data.scripts.push(assets[route.chunk].js);
    }
    data.app = {
      apiUrl: config.api.clientUrl,
      state: context.store.getState(),
    };

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(route.status || 200);
    res.send(`<!doctype html>${html}`);
  } catch (err) {
    next(err);
  }
});

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(pe.render(err));
  const html = ReactDOM.renderToStaticMarkup(
    <Html
      title="Internal Server Error"
      description={err.message}
      styles={[{ id: 'css', cssText: errorPageStyle._getCss() }]} // eslint-disable-line no-underscore-dangle
    >
      {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err} />)}
    </Html>,
  );
  res.status(err.status || 500);
  res.send(`<!doctype html>${html}`);
});

//
// Launch the server
// -----------------------------------------------------------------------------

app.listen(config.port, () => {
  console.info(`The server is running at http://localhost:${config.port}/`);
});


const getToken = (req) => {
  let token = null;
  console.log('getToken:' + req.body.token);
  if (req.headers.cookie) {
    req.headers.cookie.split(';').map((possibleToken) => {
      if (possibleToken.slice(0, 5) === 'token') {
        token = possibleToken.slice(6);
      } else if (possibleToken.slice(0, 6) === ' token') {
        token = possibleToken.slice(7);
      }
    });
  }
  return token;
}
