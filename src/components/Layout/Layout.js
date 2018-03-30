import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import HeaderTop from '../HeaderTop';
import Footer from '../Footer';
import { connect } from 'react-redux';
import axios from 'axios';
import cookie from 'react-cookie';
import { authUser } from '../../actions/auth';
import { setVal } from '../../actions/misc';

import HeaderBottom from '../HeaderBottom';
import HeaderBottomBiz from '../HeaderBottomBiz';

// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';


class Layout extends React.Component {

  componentWillMount() {
    if (!this.props.authenticated) {
      axios.post('isauthenticated', {
        token: cookie.load('token'),
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            console.log('authUser');
            this.props.authUser();
          }
        })
        .catch((err) => {
          // do nothing
        });
    } else {
      console.log('Authenticated');
    }
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className={s.root} >
        <HeaderTop {...this.props} />
        <div className={s.navSliderContainer} style={{ left: `-${100 * (this.props.slideNumber - 1)}%` }} >
          <div className={s.navSlideOne} >
            <HeaderBottom />
          </div>

          <div className={s.navSlideTwo} >
            <HeaderBottomBiz />
          </div>

        </div>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Layout.defaultProps = {
  slideNumber: 1,
};

const mapDispatchToProps = dispatch => ({
  authUser: (res) => {
    dispatch(authUser(res));
  },
  setVal: (key, value) => {
    dispatch(setVal(key, value));
  },
});


const mapStateToProps = state => ({
  ...state.auth,
  ...state.misc,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(normalizeCss, s)(Layout));
