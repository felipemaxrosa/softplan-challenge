import React from 'react';
import { UsersTable } from '../../components/tables';

export const HomePage = () => {
  return (
    <div data-testid="home-page">
      <UsersTable />
    </div>
  );
};
