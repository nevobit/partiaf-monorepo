import { PublicRoutes } from '@/constant-definitions';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const GuardRoute = () => {
  const adminInfo = null;

  return (
    <div>
      {adminInfo ? <Outlet /> : <Navigate replace to={PublicRoutes.SIGNIN} />}
    </div>
  );
};

export default GuardRoute;
