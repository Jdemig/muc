import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import s from './UploadImage.css';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import cookie from 'react-cookie';
import axios from 'axios';

import { uploadImage, setProfilePic } from '../../actions/profile';

const CLOUDINARY_UPLOAD_PRESET = 'nzdbnrza';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/droyiufd1/upload';

class UploadImage extends React.Component {
  onImageDrop = (files) => {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload = (file) => {
    request
      .post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', file)
      .end((err, res) => {
        if (err) {
          console.log(err);
        }

        if (res.body.secure_url !== '') {
          this.saveImage(res.body.secure_url);
        }
      });
  }

  saveImage = (url) => {

    //set the current state by calling setProfilePic action
    this.props.setProfilePic(url)

    //set the cookie so that data can be immediately available
    cookie.save('user', { 
      ...cookie.load('user'),
      profilePic: this.props.profilePic
    });

    //save data to database for secure storage
    const userId = cookie.load('user')._id;
    axios.post('/saveuserdata', {
        userId: userId, 
        profilePic: this.props.profilePic,
      })
      .then((res) => {
        console.log(res)
        this.props.uploadImage()
      })
      .catch((err) => {
        console.log(err);
        this.props.uploadImage()
      })
  }

  render() {
    return (

      <div onClick={this.props.uploadImage} className={s.root} style={this.props.upload ? {transform: 'translateY(0)'} : {}} >
        <div className={s.dropzoneContainer}>
          <Dropzone
            className={s.dropzone}
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop}
          >
            <p>Drop an image or click to browse files on your computer</p>
          </Dropzone>
          <button className={s.button} >Finish Upload</button>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: () => {
      dispatch(uploadImage())
    },
    setProfilePic: (url) => {
      dispatch(setProfilePic(url))
    }
  }
}

function mapStateToProps(state) {
  return state.profile
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(s)(UploadImage));