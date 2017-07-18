import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderTop.css';
import Link from '../Link';
import FontAwesome from 'react-fontawesome';
import logoUrl from '../../../public/muc-header-logo.png';
import myPhoto from '../../../public/MyPhoto.jpg';

class HeaderTop extends React.Component {


  render() {
    return (
      <div className={s.root} >
        <div className={s.container}>
          <Link to='/home' >
            <div className={s.logo} ></div>
          </Link>

          <div className={s.linksContainer}>
            <Link to='/signout' className={s.signOut}>Sign Out</Link>
            <Link className={s.profilePicLink} to='/profile' >
              <img className={s.profilePic} src={myPhoto}  />
            </Link>
            <button className={s.cogButton} >
              <FontAwesome
                className={s.cog}
                name='cog'
              />
            </button>
            <button className={s.bellButton} >
              <FontAwesome
                className={s.bell}
                name='bell'
              />
            </button>
            <button className={s.envelopeButton} >
              <FontAwesome
                className={s.envelope}
                name='envelope'
              />
            </button>
            <button className={s.userPlusButton} >
              <FontAwesome
                className={s.userPlus}
                name='user-plus'
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderTop);
