import React from 'react';
import { Navigate, useRoutes } from 'react-router';

import LandingPage from '../pages/landing';

const ApplicationRoutes: React.FC = () => {
  const routes = useRoutes([
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '404',
      element: (
        <div>
          <h1>404 page not found</h1>
        </div>
      ),
    },
  ]);

  return <>{routes}</>;
};

export default ApplicationRoutes;
