import React from 'react';
import HomeBiz from './HomeBiz';
import Layout from '../../components/Layout';
import InstantMessage from '../../components/InstantMessage';

export default {

  path: '/home-biz',

  async action({ fetch }) {
    return {
      title: 'Home',
      component: <Layout><InstantMessage><HomeBiz /></InstantMessage></Layout>,
    };
  },

};
