import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderBottomBiz.css';
import Navigation from '../Navigation';
import MobileNav from '../MobileNav';
import { changeDropdown } from '../../actions/nav';
import FontAwesome from 'react-fontawesome';
import Link from '../Link';

import logoUrl from '../../../public/muc-header-logo.png';

class HeaderBottomBiz extends React.Component {


  render() {
    return (
      <div className={s.root} >
        <div className={s.container}>

          <button onClick={this.props.toggleDropdown} type="button" className={s.navtoggle} >
            <span className={s.sronly}>Toggle navigation</span>
            <span className={s.iconbar} />
            <span className={s.iconbar} />
            <span className={s.iconbar} />
          </button>

          <nav className={s.nav}>
            <div
              className={s.containerTwo}
              role="navigation"
            >
              <Link className={s.link} to="/home-biz" >Home</Link>
              <span className={s.spacer} > | </span>
              <Link className={s.link} to="/local" >Map</Link>
              <span className={s.spacer} > | </span>
              <Link className={s.link} to="/dispensaries" >Dispensaries</Link>
              <span className={s.spacer} > | </span>
              <div className={s.search}>
                <input className={s.searchInput} to="/shop" type="text" placeholder="Search..." />
                <button className={s.searchButton}>
                  <FontAwesome
                    className={s.searchIcon}
                    name="search"
                  />
                </button>
              </div>
            </div>
          </nav>
        </div>
        <MobileNav handleToggle={this.props.toggleDropdown} dropDownNav={this.props.navToggled} />

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleDropdown: () => {
    dispatch(changeDropdown());
  },
});

const mapStateToProps = state => ({
  navToggled: state.nav.dropDownNav,
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(HeaderBottomBiz));
