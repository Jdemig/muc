import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderBottom.css';
import Navigation from '../Navigation';
import MobileNav from '../MobileNav';
import { changeDropdown } from '../../actions/nav';

import logoUrl from '../../../public/muc-header-logo.png';

class HeaderBottom extends React.Component {


  render() {
    return (
      <div className={s.root} >
        <div className={s.container}>

          <button onClick={this.props.toggleDropdown} type="button" className={s.navtoggle} >
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(HeaderBottom));
