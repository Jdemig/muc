import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderTop.css';
import Link from '../Link';
import FontAwesome from 'react-fontawesome';
import logoUrl from '../../../public/muc-header-logo.png';
import myPhoto from '../../../public/MyPhoto.jpg';

class HeaderTop extends React.Component {

  handleLeftArrow = () => {
    if (this.props.slideNumber > 1) {
      this.props.setVal('slideNumber', this.props.slideNumber - 1);
    }
  }

  handleRightArrow = () => {
    if (this.props.slideNumber < 2) {
      this.props.setVal('slideNumber', this.props.slideNumber + 1);
    }
  }

  render() {
    return (
      <div className={s.root} >
        <div className={s.arrowLeftContainer} >
          <FontAwesome
            name="chevron-circle-left"
            className={s.arrowLeft}
            onClick={this.handleLeftArrow}
          />
        </div>
        <div className={s.slideContainer} style={{ left: `-${100 * (this.props.slideNumber - 1)}%` }}>

          <div className={s.socialSlide} >
            <div className={s.slideCenter} >
              <div className={s.linksContainer}>
                <div className={s.group} >
                  <Link to="/signout" className={s.signOut}>Sign Out</Link>
                  <Link className={s.profilePicLink} to="/profile" >
                    <img className={s.profilePic} src={myPhoto} />
                  </Link>
                  <button className={s.cogButton} >
                    <FontAwesome
                      className={s.cog}
                      name="cog"
                    />
                  </button>
                  <button className={s.bellButton} >
                    <FontAwesome
                      className={s.bell}
                      name="bell"
                    />
                  </button>
                  <button className={s.envelopeButton} >
                    <FontAwesome
                      className={s.envelope}
                      name="envelope"
                    />
                  </button>
                  <button className={s.userPlusButton} >
                    <FontAwesome
                      className={s.userPlus}
                      name="user-plus"
                    />
                  </button>
                </div>
              </div>
              <Link className={s.logoLink} to="/home" >
                <div className={s.logo} />
                <h2 className={s.logoModifier} >Social</h2>
              </Link>
            </div>
          </div>

          <div className={s.bizSlide} >
            <div className={s.slideCenter} >
              <Link className={s.logoLink} to="/home" >
                <div className={s.logo} />
                <h2 className={s.logoModifierTwo} >Biz</h2>
              </Link>


            </div>
          </div>
        </div>
        <div className={s.arrowRightContainer} >
          <FontAwesome
            name="chevron-circle-right"
            className={s.arrowRight}
            onClick={this.handleRightArrow}
          />
        </div>
      </div>
    );
  }
}

HeaderTop.propTypes = {
  slideNumber: PropTypes.number,
};

HeaderTop.defaultProps = {
  slideNumber: 1,
};


export default withStyles(s)(HeaderTop);
