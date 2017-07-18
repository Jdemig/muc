import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Profile.css';
import { connect } from 'react-redux';
import Link from '../../components/Link';
import Feed from '../../components/Feed';
import UploadImage from '../../components/UploadImage';
import FriendsTile from '../../components/miniComponents/FriendsTile';
import FontAwesome from 'react-fontawesome';
import { uploadImage } from '../../actions/profile';

import coverPhotoUrl from '../../../public/default-cover-photo.jpg';
import profilePhotoUrl from '../../../public/MyPhoto.jpg';

const backgroundImage = "url('" + coverPhotoUrl + "')";
const profilePhoto = "url('" + profilePhotoUrl + "')";


class Profile extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.coverPhoto} style={{ backgroundImage: backgroundImage }}>
            <div className={s.coverPhotoCenter}>
              <div className={s.profilePhotoContainer} style={{ backgroundImage: profilePhoto }} >
                <button className={s.uploadProfilePhoto} onClick={this.props.uploadImage} >
                  <FontAwesome
                    className={s.camera}
                    name='camera'
                  />
                  <span className={s.uploadText}>
                    Upload Profile Photo
                  </span>
                </button>
              </div>

              <button onClick={this.props.uploadImage} className={s.updateCoverPhoto}>
                <FontAwesome
                  className={s.plus}
                  name='plus'
                />
                Update Cover Photo
              </button>

              <button className={s.editProfile}>
                <FontAwesome
                  className={s.cog}
                  name='cog'
                />
                Edit Profile
              </button>
            </div>
          </div>

          <div className={s.profileBodyContainer}>
            <div className={s.profileBodyCenter}>
              <div className={s.profileLeftContainer}>


                <FriendsTile />

                <div className={s.profilePhotosContainer}>

                </div>


              </div>

              <Feed />


            </div>
          </div>

        </div> 
        <UploadImage upload={this.props.upload} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: () => {
      dispatch(uploadImage())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.auth,
    ...state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(Profile));
