import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomeBiz.css';
import Feed from '../../components/Feed';
import FriendsTile from '../../components/miniComponents/FriendsTile';
import QuickLinksTile from '../../components/miniComponents/QuickLinksTile';

class HomeBiz extends React.Component {
  render() {
    return (
      <div className={s.root} >
        <div className={s.container} >
          <h2>This page will be like the home page on your current site</h2>
          <h2>You could have the "WeedWiser Biz" section of the website behave similarly to LinkedIn. The users of "WeedWiser Social" could then browse the "WeedWiser Biz" listings.</h2>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HomeBiz);
