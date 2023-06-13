import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingBox } from './components';
import NotFound from './screens/NotFount';
import Home from './screens/Home';
import { PrivateRoutes ,PublicRoutes} from './constant-definitions';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Terms from './screens/Terms';
import Signin from './screens/Signin';

const Application = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>

          {/* public routes */}
          <Route path={PublicRoutes.LOGIN} element={<Login/>} />
          <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path={PublicRoutes.TERMS} element={<Terms />} />
          <Route path={PublicRoutes.SIGNIN} element={<Signin />} />

          {/* private routes */}
          <Route path={PrivateRoutes.HOME} element={<Home />} />

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Application;
