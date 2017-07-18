import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import history from '../../history';
import cookie from 'react-cookie';
import axios from 'axios';
import { authUser } from '../../actions/auth';


class Authentication extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  componentWillMount() {
    if (!this.props.authenticated) {
      history && history.push('/');
      /*axios.post('isauthenticated', {
          token: cookie.load('token')
        })
        .then((res) => {
          console.log(res.data);
          if (!res.data.success) {
            history && history.push('/login');
          }
        })
        .catch((err) => {
          history && history.push('/login');
        });*/
    }
  }

  componentWillUpdate(nextProps) {
    if (!nextProps.authenticated) {
      history && history.push('/');
    }
  }

  render() {
    return this.props.children
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

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

