import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import InstantMessage from '../../components/InstantMessage';

export default {

  path: '/home',

  async action({ fetch }) {
    return {
      title: 'Home',
      component: <Layout><InstantMessage><Home /></InstantMessage></Layout>,
    };
  },

};
