import React from 'react';
import Terms from './Terms';
import Layout from '../../components/Layout';

export default {

  path: '/terms',

  action() {
    return {
      title: 'Terms',
      component: <Terms />,
    };
  },

};
