import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { LayoutApp } from '../layout-app';
import { UserModal } from '../modals';
import { ROUTES } from '../../models/enums';
import { useAppSelector } from '../../store';
import { ProtectiveRoutes } from '../protective-routes';
import { selectHasActiveUser } from '../../store/selectors';
import { HomePage, LoginPage } from '../../pages';

export function App() {
  const hasActiveUser = useAppSelector(selectHasActiveUser);

  return (
    <BrowserRouter>
      <LayoutApp>
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={
              <ProtectiveRoutes>
                <HomePage />
              </ProtectiveRoutes>
            }
          />
          <Route
            path={ROUTES.LOGIN}
            element={
              hasActiveUser ? <Navigate to={ROUTES.HOME} /> : <LoginPage />
            }
          />
        </Routes>

        <UserModal />
      </LayoutApp>
    </BrowserRouter>
  );
}

export default App;
