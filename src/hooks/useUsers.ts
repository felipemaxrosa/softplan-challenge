import { useEffect, useState } from 'react';

import { userService } from '../services';
import { setUsers } from '../store/actions/user-actions';
import { selectFilteredUsers } from '../store/selectors';
import { useAppDispatch, useAppSelector } from '../store';

export const useUsers = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const filteredUsers = useAppSelector(selectFilteredUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      // Usually we use async/await to requests
      const response = userService.getUsers();
      dispatch(setUsers(response));

      setLoading(false);
    } catch (error) {
      setErrorMessage('Erro na requisicao de lista de usuarios');
    }
  }, [dispatch]);

  return {
    errorMessage,
    loading,
    users: filteredUsers,
  };
};
