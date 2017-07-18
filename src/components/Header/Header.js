import React from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import logoUrl from './logo-small.png';
import { changeDropdown } from '../../actions/nav';

import Link from '../Link';
import Navigation from '../Navigation';
import MobileNav from '../MobileNav';


class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Link onClick={this.props.navToggled === true ? this.props.toggleDropdown : null} className={s.brand} to="/">
            <img src={logoUrl} width="68" height="38" alt="Logo" />
          </Link>

          <button onClick={this.props.toggleDropdown} type="button" className={s.navtoggle} data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className={s.sronly}>Toggle navigation</span>
            <span className={s.iconbar}></span>
            <span className={s.iconbar}></span>
            <span className={s.iconbar}></span>
          </button>

          <Navigation />
        </div>
        <MobileNav handleToggle={this.props.toggleDropdown} dropDownNav={this.props.navToggled} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDropdown: () => {
      dispatch(changeDropdown());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    navToggled: state.nav.dropDownNav
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Header));
