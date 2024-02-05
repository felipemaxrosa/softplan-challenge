import { useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Grid,
  SelectChangeEvent,
} from '@mui/material';

import {
  selectActiveUser,
  selectIsEditing,
  selectSelectedUser,
  selectShowUserModal,
} from '../../../store/selectors';
import { Input, Select } from '../../form';
import {
  addUser,
  showMyProfileModal,
  updateUser,
} from '../../../store/actions/user-actions';
import { Profile } from '../../../models/enums';
import { User } from '../../../models/interfaces';
import { PROFILE_SELECT_ITEMS } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../store';

const INITIAL_USER_STATE: User = {
  email: '',
  name: '',
  password: '',
  profile: Profile.USER,
};

export const UserModal = () => {
  const [localUser, setLocalUser] = useState(INITIAL_USER_STATE);

  const open = useAppSelector(selectShowUserModal);
  const isEditingUser = useAppSelector(selectIsEditing);
  const selectedUser = useAppSelector(selectSelectedUser);
  const activeUser = useAppSelector(selectActiveUser);
  const editingOwnProfile = isEditingUser && localUser?.id === activeUser?.id;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isEditingUser && selectedUser) {
      setLocalUser(selectedUser);
    } else {
      setLocalUser(INITIAL_USER_STATE);
    }
  }, [isEditingUser, selectedUser]);

  const handleClose = () => {
    dispatch(showMyProfileModal(false));
    setLocalUser(INITIAL_USER_STATE);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setLocalUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent<unknown>) => {
    const { value, name } = event.target;

    setLocalUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (isEditingUser) {
      dispatch(updateUser(localUser));
    } else {
      dispatch(addUser(localUser));
    }

    handleClose();
  };

  const getDialogTitle = () => {
    if (!isEditingUser) return 'Novo Usuário';
    if (!editingOwnProfile) return 'Editar Usuário';
    return 'Meu Perfil';
  };

  const isValidatedUser = () => {
    const { id, ...userWithoutID } = localUser;

    const areAllFieldsFilled = Object.values(userWithoutID).every(
      (value) => value.length > 0
    );

    return areAllFieldsFilled;
  };

  return (
    <Dialog
      data-testid="my-profile-modal"
      open={open}
      maxWidth="md"
      fullWidth
      onClose={handleClose}
    >
      <DialogTitle>{getDialogTitle()}</DialogTitle>
      <DialogContent sx={{ padding: '32px 24px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Input
              label="Nome"
              name="name"
              value={localUser?.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label="Email"
              name="email"
              type="email"
              value={localUser?.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              label="Senha"
              name="password"
              type="password"
              value={localUser?.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              label="Perfil"
              name="profile"
              disabled={activeUser?.profile === Profile.USER}
              value={localUser?.profile ?? Profile.USER}
              onChange={handleSelectChange}
              items={PROFILE_SELECT_ITEMS}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button
          data-testid="user-modal-close"
          onClick={handleClose}
          variant="outlined"
        >
          Fechar
        </Button>
        <Button
          data-testid="user-modal-save"
          onClick={handleSave}
          variant="contained"
          disabled={!isValidatedUser()}
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
