import { Routes as BrowserRoutes, Route } from 'react-router-dom';

import { ROUTES } from '../models/enums';
import { HomePage, LoginPage, NotFoundPage } from '../pages';

export function Routes() {
  return (
    <BrowserRoutes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.OTHERS} element={<NotFoundPage />} />
    </BrowserRoutes>
  );
}
