import React from 'react';
import Contact from './Contact';
import Layout from '../../components/Layout';

export default {

  path: '/contact',

  async action({ fetch }) {
    return {
      title: 'Contact',
      component: <Contact />,
    };
  },

};