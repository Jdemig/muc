import React from 'react';
import Layout from '../../components/Layout';
import Profile from './Profile';
import RequireAuth from '../../components/RequireAuth';

const title = 'Profile';

export default {
  path: '/profile',
  action() {
    return {
      title,
      component: <RequireAuth><Layout><Profile title={title} /></Layout></RequireAuth>,
    };
  }
};
