import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import HeaderTop from '../HeaderTop';
import HeaderBottom from '../HeaderBottom';
import Footer from '../Footer';
import { connect } from 'react-redux';
import axios from 'axios';
import cookie from 'react-cookie';
import { authUser } from '../../actions/auth';


// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import s from './Layout.css';


class Layout extends React.Component {

  componentWillMount() {
    if (!this.props.authenticated) {
      axios.post('isauthenticated', {
          token: cookie.load('token')
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            console.log('authUser');
            this.props.authUser();
          }
        })
        .catch((err) => {
          //do nothing
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
        <HeaderTop />
        <HeaderBottom />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (res) => {
      dispatch(authUser(res))
    }
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(normalizeCss, s)(Layout));
