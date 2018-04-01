import React from 'react';
import Layout from '../../components/Layout';
import Local from './Local';

const title = 'Local';

export default {
  path: '/local',
  action() {
    return {
      title,
      component: <Layout footer={false} ><Local title={title} /></Layout>,
    };
  },
};
