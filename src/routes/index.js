/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./landing').default,
    require('./downloadTheApp').default,
    require('./home').default,
    require('./homeBiz').default,
    require('./terms').default,
    require('./contact').default,
    require('./profile').default,
    require('./privacy').default,
    require('./local').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - Zisuiti`;
    route.description = route.description || '';

    return route;
  },

};
