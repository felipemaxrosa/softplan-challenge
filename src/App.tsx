import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { HomePage, LoginPage, NotFoundPage } from './pages';

function App() {
  return (
    <BrowserRouter>
      <header>Header</header>
      <main data-testid="main-app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
