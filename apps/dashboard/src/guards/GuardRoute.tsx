import { PublicRoutes } from '@/constant-definitions';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes } from '../constant-definitions/Routes/index';
import { useSelector } from 'react-redux';
import { AppStore } from '../redux/store';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate to={PrivateRoutes.PRIVATE} replace /> 
)

const GuardRoute = ({privateValidation}: Props) => {
  const { user } = useSelector((store: AppStore) => store.auth);

  return !user.token ? (
    privateValidation ? (
      PrivateValidationFragment
    ): (
      PublicValidationFragment
    )
  ): (
    <Navigate replace to={PublicRoutes.SIGNIN} />
  )
    
};

export default GuardRoute;
