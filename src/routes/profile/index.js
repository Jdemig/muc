import React from 'react';
import Layout from '../../components/Layout';
import Profile from './Profile';

const title = 'Profile';

export default {
  path: '/profile',
  action() {
    return {
      title,
      component: <Layout><Profile title={title} /></Layout>,
    };
  },
};
