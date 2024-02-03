import React, { useEffect, useState } from 'react';
import { User } from '../models/interfaces';
import { userService } from '../services';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Usually we use async/await to requests
      const response = userService.getUsers();
      setUsers(response);
      setLoading(false);
    } catch (error) {
      setErrorMessage('Erro na requisicao de lista de usuarios');
    }
  }, []);

  return {
    errorMessage,
    loading,
    users,
  };
};
