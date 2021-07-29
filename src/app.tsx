import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ApplicationRoutes from './routes';
import './app.scss';

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
