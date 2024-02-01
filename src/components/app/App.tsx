import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage } from '../../pages';
import { ROUTES } from '../../models/enums';
import { LayoutApp } from '../layout-app';
import { MyProfileModal } from '../modals';

export function App() {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.OTHERS} element={<NotFoundPage />} />
        </Routes>

        <MyProfileModal />
      </LayoutApp>
    </BrowserRouter>
  );
}

export default App;
