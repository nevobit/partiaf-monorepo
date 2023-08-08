import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingBox } from './components';
import NotFound from './screens/NotFount';
import Home from './screens/Private/Home';
import { PrivateRoutes ,PublicRoutes} from './constant-definitions';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Terms from './screens/Terms';
import Signin from './screens/Signin';
import Private from './screens/Private';
import {Layout} from './components';
import Reservation from './screens/Private/Reservation';
import RoutesWithNotFound from './utilities/routes-with-not-found';
import GuardRoute from './guards/GuardRoute';

// layout here is temporary


const Application = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <RoutesWithNotFound>
          {/* public routes */}
          <Route path={PublicRoutes.LOGIN} element={<Login/>} />
          <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
          <Route path={PublicRoutes.TERMS} element={<Terms />} />
          <Route path={PublicRoutes.SIGNIN} element={<Signin />} />

          {/* private routes */}
          {/* <Route path={PrivateRoutes.HOME} element={<Home />} /> */ }
          {/* <Route path={PrivateRoutes.RESERVATION} element={<Reservation />} /> */}

          <Route element={<GuardRoute privateValidation={true}/>}>
          <Route path="/*" element={<Private />} />            
          </Route>
          {/* private temporary path for layout*/}
          <Route path="*" element={<NotFound />} />
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  );
};

export default Application;
