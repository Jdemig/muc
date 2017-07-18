import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';

import facebookUrl from '../../../public/facebook.png';
import twitterUrl from '../../../public/twitter.png';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root} style={this.props.footer ? {display: 'block'} : {display: 'none'}} >
        <div className={s.infoSlide}>
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

        <div className={s.footerContainer} >
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
      </div>
    );
  }
}

export default withStyles(s)(Footer);
