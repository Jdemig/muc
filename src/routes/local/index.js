import React from 'react';
import Layout from '../../components/Layout';
import Local from './Local';
import RequireAuth from '../../components/RequireAuth';

const title = 'Local';

export default {
  path: '/local',
  action() {
    return {
      title,
      component: <RequireAuth><Layout footer={false} ><Local title={title} /></Layout></RequireAuth>,
    };
  }
};