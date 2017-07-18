import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './QuickLinksTile.css';
import Link from '../../Link';
import FontAwesome from 'react-fontawesome';

import profileUrl from '../../../../public/MyPhoto.jpg';
const profilePhoto = "url('" + profileUrl + "')";

class QuickLinksTile extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.profileContainer}>
            <div className={s.profilePhoto} style={{ backgroundImage: profilePhoto }} ></div>
            <h2 className={s.headerTwo} >Hi <Link to='/profile' className={s.profileLink} >Jonathan!</Link></h2>
          </div>
          <div className={s.quickLinksBox}>
            <Link className={s.eventsLink} to='/events'>
              <FontAwesome
                className={s.calendar}
                name='calendar'
              />
              <span className={s.events}>Events</span>
            </Link>
            <Link className={s.pagesLink} to='/pages' >
              <FontAwesome
                className={s.listAlt}
                name='list-alt'
              />
              <span className={s.pages}>Pages</span>
            </Link>
            <Link className={s.groupsLink} to='/groups' >
              <FontAwesome
                className={s.users}
                name='users'
              />
              <span className={s.groups}>Groups</span>
            </Link>
            <Link className={s.liveVideoLink} to='/live-video' >
              <FontAwesome
                className={s.videoCamera}
                name='video-camera'
              />
              <span className={s.liveVideo}>Live Video</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(QuickLinksTile);

