import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import { unauthUser } from '../../actions/auth';
import { connect } from 'react-redux';
import axios from 'axios';
import history from '../../history';
import cookie from 'react-cookie';
import FontAwesome from 'react-fontawesome';

class Navigation extends React.Component {
  constructor() {
    super()
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.unauthUser();
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });
    history.push('/');
  }

  render() {
    return (
      <nav className={s.root}>
        <div
          className={cx(s.container)}
          role="navigation"
        >
          <Link className={s.link} to='/home' >Home</Link>
          <span className={s.spacer} > | </span>
          <Link className={s.link} to='/local' >Local</Link>
          <span className={s.spacer} > | </span>
          <Link className={s.link} to='/music' >Music</Link>
          <span className={s.spacer} > | </span>
          <Link className={s.link} to='/dispensary' >Dispensary</Link>
          <span className={s.spacer} > | </span>
          <Link className={s.link} to='/shop' >Shop</Link>
          <span className={s.spacer} > | </span>
          <div className={s.search}>
            <input className={s.searchInput} to='/shop' type='text' />
            <button className={s.searchButton}>
              <FontAwesome
                className={s.searchIcon}
                name='search'
              />
            </button>
          </div>
        </div>
      </nav>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    unauthUser: () => {
      dispatch(unauthUser())
    }
  }
}

function mapStateToProps(state) {
  return state.auth
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Navigation));
