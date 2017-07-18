import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './FriendsTile.css';
import FontAwesome from 'react-fontawesome';

const friendProfilePic = "url('" + friendProfileUrl + "')";
import friendProfileUrl from '../../../../public/FriendProfile.jpg';

class FriendsTile extends React.Component {
  render() {
    const array = [0, 1, 2, 3];
    return (
      <div className={s.root}>
        <h2 className={s.headerTwo} >Friends - 885</h2>
        { 
          array.map((thingy) => {
            return (
              <div className={s.container} key={ thingy }>
                <div className={s.profilePicContainer} >
                  <div style={{ backgroundImage: friendProfilePic }} className={s.friendProfilePic}></div>
                </div>
                <div className={s.profileInfoContainer}>
                  <h4 className={s.headerFour}>Shawn</h4>
                  <div className={s.numberOfFriendsContainer}>
                    <FontAwesome
                      className={s.addressBook}
                      name='address-book'
                    />
                    <p className={s.numberOfFriends}>119 friends</p>
                  </div>
                  <div className={s.mutualFriendsContainer}>
                    <FontAwesome
                      className={s.users}
                      name='users'
                    />
                    <p className={s.mutualFriends}>23 mutual friends</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}


export default withStyles(s)(FriendsTile);
