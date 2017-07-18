import React from 'react';
import Landing from './Landing';
import Layout from '../../components/Layout';

export default {

  path: '/',

  action() {
    return {
      title: 'Landing',
      component: <Landing />,
    };
  },

};
