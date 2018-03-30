import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FeedItem.css';
import FontAwesome from 'react-fontawesome';
import Link from '../../Link';

import profilePhotoUrl from '../../../../public/MyPhoto.jpg';
const profilePhoto = `url('${profilePhotoUrl}')`;

import postPhotoUrl from '../../../../public/PostPhoto.jpg';
const postPhoto = `url('${postPhotoUrl}')`;

class FeedItem extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.post}>
          <div className={s.postHeader} >
            <div className={s.profilePhoto} style={{ backgroundImage: profilePhoto }} />
            <div className={s.feedActionContainer}>
              <div className={s.description} >
                <p className={s.feedAction}><Link className={s.fromProfileLink} to="/profile" >Jonathan Emig</Link></p>
                <p className={s.feedTime}>30 minutes ago</p>
              </div>
              <FontAwesome
                name="ellipsis-v"
                className={s.ellipsis}
              />
            </div>

          </div>
          <div className={s.postPhoto} style={{ backgroundImage: postPhoto }} />
          <div className={s.paddingContainer} >
            <div className={s.interactionContainer} >
              <FontAwesome
                name="heart"
                className={s.heart}
              />
              <FontAwesome
                name="bookmark"
                className={s.bookmark}
              />
            </div>
            <p className={s.likes}>100 likes</p>
            <div className={s.commentContainer} >
              <div className={s.firstCommentContainer}>
                <p className={s.commentName} >Jonathan Emig</p>
                <p className={s.comment} >Check out this wax I made!</p>
              </div>
              <div className={s.commentInputContainer} >
                <div className={s.profilePhotoSmall} style={{ backgroundImage: profilePhoto }} />
                <input className={s.commentInput} placeholder="Comment..." />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(s)(FeedItem);
