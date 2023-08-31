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
import { GoogleOAuthProvider } from "@react-oauth/google";
import Bussiness from './screens/Private/Business';
import RegisterBusiness from './screens/Private/RegisterBusiness';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
  
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    }
  }
})
const Application = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<LoadingBox />}>
      <GoogleOAuthProvider clientId="581513777412-lgcrkv5l550t3l4u3vpduou0ml9ts6pv.apps.googleusercontent.com">
      <BrowserRouter>
        <RoutesWithNotFound>
          {/* public routes */}
          <Route path={PublicRoutes.LOGIN} element={<Signin/>} />
          <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
          <Route path={PublicRoutes.TERMS} element={<Terms />} />
          <Route path={PublicRoutes.SIGNIN} element={<Signin />} />
          <Route path={PrivateRoutes.BUSINESS} element={<Bussiness />} />
          <Route path={PrivateRoutes.REGISTER_BUSINESS} element={<RegisterBusiness />} />

          <Route element={<GuardRoute privateValidation={true}/>}>
          <Route path="/*" element={<Private />} />            
          </Route>
          <Route path="*" element={<NotFound />} />
        </RoutesWithNotFound>
      </BrowserRouter>
      </GoogleOAuthProvider>
      </Suspense>
    </QueryClientProvider>

  );
};

export default Application;
