import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MobileNav.css';
import Link from '../Link';
import { connect } from 'react-redux';
import { unauthUser } from '../../actions/auth';
import { changeDropdown } from '../../actions/nav';
import cookie from 'react-cookie';
import history from '../../history';
import FontAwesome from 'react-fontawesome';

class MobileNav extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    this.props.unauthUser();
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });
    history.push('/logout');
  }


  render() {
    if (this.props.auth.authenticated) {
      return (
        <nav className={s.root}>
          <div 
            onClick={this.props.nav.dropDownNav && this.props.toggleDropdown} 
            className={cx(s.container, (this.props.nav.dropDownNav ? s.displaynav : null))} 
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
    } else {
      return (
        <nav className={s.root}>
          <div 
            onClick={this.props.nav.dropDownNav && this.props.toggleDropdown} 
            className={cx(s.container, (this.props.nav.dropDownNav ? s.displaynav : null))} 
            role="navigation" 
          >
            <Link className={s.link} to="/map">Map</Link>
            <Link className={s.link} to="/sell">Sell With Us</Link>
            <Link className={s.link} to="/buy">Buy With Us</Link>
            <span className={s.spacer} > | </span>
            <Link className={s.link} to="/login">Log in</Link>
            <span className={s.spacer} >or</span>
            <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
          </div>
        </nav>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unauthUser: () => {
      dispatch(unauthUser())
    },
    toggleDropdown: () => {
      dispatch(changeDropdown());
    }
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(MobileNav));
