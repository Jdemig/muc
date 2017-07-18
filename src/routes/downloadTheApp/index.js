import React from 'react';
import DownloadTheApp from './DownloadTheApp';
import Layout from '../../components/Layout';

export default {

  path: '/download-the-app',

  async action({ fetch }) {
    return {
      title: 'Download The App',
      component: <DownloadTheApp />,
    };
  },

};
