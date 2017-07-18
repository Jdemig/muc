import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Feed from '../../components/Feed';
import FriendsTile from '../../components/miniComponents/FriendsTile';
import QuickLinksTile from '../../components/miniComponents/QuickLinksTile';

class Home extends React.Component {
  render() {
    return (
      <div className={s.root} >
        <div className={s.container} >
          <div className={s.leftContainer}>
            <QuickLinksTile />
            <FriendsTile />
          </div>
          <Feed />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
