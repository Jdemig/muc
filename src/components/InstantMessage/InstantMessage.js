import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { authUser } from '../../actions/auth';
import FontAwesome from 'react-fontawesome';

import s from './InstantMessage.css';


class InstantMessage extends React.Component {

  render() {
    return (
      <div className={s.root} >
        {this.props.children}
        <button className={s.messageBox}>
          <FontAwesome
            className={s.circle}
            name='circle'
          />
          <span className={s.friendsOnline}>
            30 Friends Online
          </span>
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(InstantMessage));