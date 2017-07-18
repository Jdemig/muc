import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FeedItem.css';
import FontAwesome from 'react-fontawesome';
import Link from '../../Link';

import profilePhotoUrl from '../../../../public/MyPhoto.jpg';
const profilePhoto = "url('" + profilePhotoUrl + "')";

import postPhotoUrl from '../../../../public/PostPhoto.jpg';
const postPhoto = "url('" + postPhotoUrl + "')";

class FeedItem extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.profilePhoto} style={{ backgroundImage: profilePhoto }} ></div>
        <div className={s.feedActionContainer}>
          <p className={s.feedAction}><Link className={s.fromProfileLink} to='/profile' >Jonathan Emig</Link></p>
          <p className={s.feedDate}>on Dec 15th, 2016</p>
        </div>
        <div className={s.post}>
          <p className={s.postText}>Check out this cool thing</p>
          <div className={s.postPhoto} style={{ backgroundImage: postPhoto }} ></div>
        </div>
      </div>
    );
  }
}


export default withStyles(s)(FeedItem);
