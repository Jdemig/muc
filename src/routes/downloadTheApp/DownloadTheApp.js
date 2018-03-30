import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DownloadTheApp.css';
import Link from '../../components/Link';

import FontAwesome from 'react-fontawesome';

import logoUrl from '../../../public/weed-wiser-logo.png';
import appleUrl from '../../../public/app-store.png';
import googleUrl from '../../../public/google-play-badge.png';

class DownloadTheApp extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.logoContainer} >
          <img className={s.logo} src={logoUrl} />
        </div>

        <div className={s.downloadContainer}>
          <h2 className={s.headerTwo} >App <strong>Downloads</strong></h2>
          <p className={s.paragraphOne} >Want the app? Download it here!</p>
        </div>

        <div className={s.googleContainer}>
          <a className={s.googleLink} href="https://play.google.com/store/apps"><img className={s.googleImg} alt="Get it on Google Play" src={googleUrl} /></a>
        </div>

        <div className={s.appleContainer}>
          <a className={s.appleLink} href="https://itunes.apple.com/us/app" ><img className={s.appleImg} alt="Download on the App Store" src={appleUrl} /></a>
        </div>

        <div className={s.contactContainer}>
          <div className={s.contactCenter}>
            <div className={s.paragraphContainer}>
              <p className={s.paragraphTwo} >For app support please contact us here</p>
            </div>
            <div className={s.linkContainer}>
              <Link to="/contact-us" className={s.messageLink} >
                <FontAwesome
                  className={s.envelope}
                  name="envelope"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={s.noticeContainer}>
          <p className={s.paragraphThree}>Members must be 21 years of age or older. <br /> Members residing in the following states will not be able to participate due to cannabis prohibition: ID, UT, WY, SD, NE, KS, OK, MO, LA, IN, KY, VA, WV, NC, MS, AL and SC.</p>
        </div>


        <div className={s.footer}>
          <div className={s.homeContainer}>
            <Link to="/" className={s.homeLink}>Home</Link>
          </div>
          <div className={s.footerCenter}>
            <a className={s.twitterLink} href="https://twitter.com/Meetupcannabis">
              <FontAwesome
                className={s.twitter}
                name="twitter"
              />
            </a>
            <a className={s.facebookLink} href="https://www.facebook.com/MeetupCannabis-183357422156118/">
              <FontAwesome
                className={s.facebook}
                name="facebook"
              />
            </a>
            <a className={s.instagramLink} href="https://www.instagram.com/meetupcannabis/">
              <FontAwesome
                className={s.instagram}
                name="instagram"
              />
            </a>
            <Link to="/contact-us" className={s.messageLinkTwo} >
              <FontAwesome
                className={s.envelopeTwo}
                name="envelope"
              />
            </Link>
          </div>
        </div>


      </div>
    );
  }
}

export default withStyles(s)(DownloadTheApp);
