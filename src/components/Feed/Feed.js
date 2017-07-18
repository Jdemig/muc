import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Feed.css';
import FontAwesome from 'react-fontawesome';
import FeedItem from '../../components/miniComponents/FeedItem';

import profilePhotoUrl from '../../../public/MyPhoto.jpg';
const profilePhoto = "url('" + profilePhotoUrl + "')";

class Feed extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.postContainer}>
          <form className={s.postForm} >
            <div className={s.postType}>
              <button className={s.postTypeButton} >
                <FontAwesome
                  className={s.pencilSquareO}
                  name='pencil-square-o'
                />
                <span className={s.buttonText}>
                  Story
                </span>
              </button>
              <button className={s.postTypeButton} >
                <FontAwesome
                  className={s.cameraRetro}
                  name='camera-retro'
                />
                <span className={s.buttonText}>
                  Picture/Video
                </span>
              </button>
              <button className={s.postTypeButton} >
                <FontAwesome
                  className={s.videoCamera}
                  name='video-camera'
                />
                <span className={s.buttonText}>
                  Live Video
                </span>
              </button>
            </div>
            <div style={{ backgroundImage: profilePhoto }}  className={s.postProfilePic} ></div>
            <textarea className={s.postText} name='postText' placeholder='Post a story' ></textarea>
            <div className={s.postAddon}>
              <button className={s.addonButton} >
                <FontAwesome
                  className={s.pictureO}
                  name='picture-o'
                />
              </button>
              <button className={s.addonButton} >
                <FontAwesome
                  className={s.link}
                  name='link'
                />
              </button>
              <button className={s.addonButton} >
                <FontAwesome
                  className={s.music}
                  name='music'
                />
              </button>
              <button className={s.addonButton} >
                <FontAwesome
                  className={s.user}
                  name='user'
                />
              </button>
            </div>
            <button className={s.submitPostButton} type='submit'>Share</button>
          </form>
        </div>

        <div className={s.feedMainContent}>
          <FeedItem />
        </div>

      </div>
    );
  }
}


export default withStyles(s)(Feed);