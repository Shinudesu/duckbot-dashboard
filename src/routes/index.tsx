import React from 'react';
import { Navigate, useRoutes } from 'react-router';

const ApplicationRoutes: React.FC = () => {
  const routes = useRoutes([
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
    {
      path: '/',
      element: <div>Hello World!</div>,
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
