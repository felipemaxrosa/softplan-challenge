import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage } from '../../pages';
import { ROUTES } from '../../models/enums';

function App() {
  return (
    <BrowserRouter>
      <header>Header</header>
      <main data-testid="main-app">
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.OTHERS} element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
