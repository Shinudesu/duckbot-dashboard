import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './app.scss';
import ApplicationRoutes from './routes';

const Application: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ApplicationRoutes />
      </BrowserRouter>
    </>
  );
};

export default Application;
