import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Landing.css';
import { connect } from 'react-redux';
import { toggleSignIn, toggleSignUp } from '../../actions/auth';
import Link from '../../components/Link';
import SignUp from '../../components/SignUp';
import SignIn from '../../components/SignIn';

import logoUrl from '../../../public/muc-logo-small.png';
import facebookUrl from '../../../public/facebook.png';
import twitterUrl from '../../../public/twitter.png';

class Landing extends React.Component {
  render() {
    return (
      <div className={s.root}>

        <div className={s.banner} >
          <div className={s.bannerFilter}>
            <div className={s.header} >
              <img className={s.logo} src={logoUrl} />
              <div className={s.linkCenter}>
                <Link to='/download-the-app' className={s.downloadLink} >Download The App!</Link>
              </div> 
            </div>

            <div className={s.callToAction}>
              <h1 className={s.header1} >CONNECTING ON A HIGHER LEVEL</h1>
              <p className={s.paragraph} >It's always been about the community</p>
              <div className={s.buttonContainer} >
                <div className={s.buttonCenter}>
                  <button onClick={this.props.toggleSignIn} className={s.signInButton} >Sign In</button>
                  <button onClick={this.props.toggleSignUp} className={s.signUpButton} >Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.infoSlide}>
          <div className={s.contentContainer}>
            <h2 className={s.header2} >Meetup with other members, expand your personal network, grow your business, promote events, create a store, join communities</h2>
          </div>
          <div className={s.contentContainer}>
            <p className={s.paragraph2} >MeetupCannabis will expand more than just your mind. It's not just a network, it's a community</p>
          </div>
          <div className={s.contentContainer}>
            <div className={s.createAccountCenter}>
              <button onClick={this.props.toggleSignUp} className={s.createAccountButton} >Create Your Account</button>
            </div>
          </div>

          <div className={s.linksContainer}>
            <div className={s.links}>
              <div className={s.whyUsContainer} >
                <div className={s.whyUs}>
                  <h4 className={s.header4}>Why Us?</h4>
                  <a className={s.linkParagraphs}>Create Events</a>
                  <a className={s.linkParagraphs}>Kush Market</a>
                  <a className={s.linkParagraphs}>Create Pages</a>
                </div>
              </div>

              <div className={s.insideContainer}>
                <div className={s.inside}>
                  <h4 className={s.header4}>Inside?</h4>
                  <a className={s.linkParagraphs}>Member Meetups</a>
                  <a className={s.linkParagraphs}>Join Communities</a>
                  <a className={s.linkParagraphs}>Video Channels</a>
                </div>
              </div>

              <div className={s.tonsOfStuffContainer}>
                <div className={s.tonsOfStuff}>
                  <h4 className={s.header4}>Tons of Stuff</h4>
                  <a className={s.linkParagraphs}>Integrated Goodies</a>
                  <a className={s.linkParagraphs}>Local Cannabis Stores</a>
                  <a className={s.linkParagraphs}>Post Your Music</a>
                </div>
              </div>

              <div className={s.businessesContainer}>
                <div className={s.businesses}>
                  <h4 className={s.header4}>Businesses</h4>
                  <a className={s.linkParagraphs}>Sell Your Products and Services</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.footerContainer}>
          <div className={s.footer}>
            <div className={s.socialContainer}>
              <div className={s.social}>
                <a className={s.facebook} href="https://www.facebook.com/MeetupCannabis-183357422156118/" ><img src={facebookUrl} /></a>
                <a className={s.twitter} href="https://twitter.com/Meetupcannabis" ><img src={twitterUrl} /></a>
              </div>
            </div>

            <div className={s.legalContainer}>
              <p className={s.legal} >Copyright @2017 - <Link className={s.contactLink} to='/contact' >Contact</Link> - <a>Privacy</a> - <Link className={s.termsLink} to='/terms'>Terms</Link> - <a>Contest & Campaigns</a></p>
            </div>
          </div>
        </div>
        
        <SignIn />
        <SignUp />

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSignIn: () => {
      dispatch(toggleSignIn())
    },
    toggleSignUp: () => {
      dispatch(toggleSignUp())
    }
  }
}

const mapStateToProps = (state) => {
  return state.auth
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Landing));
