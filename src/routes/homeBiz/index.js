import React from 'react';
import HomeBiz from './HomeBiz';
import Layout from '../../components/Layout';
import InstantMessage from '../../components/InstantMessage';
import RequireAuth from '../../components/RequireAuth';

export default {

  path: '/home-biz',

  async action({ fetch }) {
    return {
      title: 'Home',
      component: <RequireAuth><Layout><InstantMessage><HomeBiz /></InstantMessage></Layout></RequireAuth>,
    };
  },

};
