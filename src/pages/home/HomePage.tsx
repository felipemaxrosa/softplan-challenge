import React from 'react';
import { UsersTable } from '../../components/tables';
import { useUsers } from '../../hooks';

export const HomePage = () => {
  const { users } = useUsers();

  return (
    <div data-testid="home-page">
      <UsersTable tableRows={users} />
    </div>
  );
};
