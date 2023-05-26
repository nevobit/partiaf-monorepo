import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingBox } from './components';
import NotFound from './screens/NotFount';
import Home from './screens/Home';
import { PrivateRoutes } from './constant-definitions';

const Application = () => {
  return (
    <Suspense fallback={<LoadingBox />}>
      <BrowserRouter>
        <Routes>
          <Route path={PrivateRoutes.HOME} element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Application;
