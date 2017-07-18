import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import InstantMessage from '../../components/InstantMessage';
import RequireAuth from '../../components/RequireAuth';

export default {

  path: '/home',

  async action({ fetch }) {
    return {
      title: 'Home',
      component: <RequireAuth><Layout><InstantMessage><Home /></InstantMessage></Layout></RequireAuth>,
    };
  },

};
