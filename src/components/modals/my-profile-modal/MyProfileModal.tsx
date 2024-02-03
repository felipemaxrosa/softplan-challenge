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
  selectShowMyProfileModal,
} from '../../../store/selectors';
import { Input, Select } from '../../form';
import { Profile } from '../../../models/enums';
import { User } from '../../../models/interfaces';
import { PROFILE_SELECT_ITEMS } from '../../../constants';
import { useAppDispatch, useAppSelector } from '../../../store';
import { showMyProfileModal } from '../../../store/actions/modal-actions';
import { setActiveUser, updateUser } from '../../../store/actions/user-actions';

export const MyProfileModal = () => {
  const open = useAppSelector(selectShowMyProfileModal);
  const activeUser = useAppSelector(selectActiveUser);

  const [localUser, setLocalUser] = useState({} as User);

  useEffect(() => {
    if (activeUser) {
      setLocalUser(activeUser);
    }
  }, [activeUser]);

  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(showMyProfileModal(false));
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
    dispatch(setActiveUser(localUser));
    dispatch(updateUser(localUser));

    handleClose();
  };

  return (
    <Dialog
      data-testid="my-profile-modal"
      open={open}
      maxWidth="md"
      fullWidth
      onClose={handleClose}
    >
      <DialogTitle>Meu Perfil</DialogTitle>
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
        <Button onClick={handleClose} variant="outlined">
          Fechar
        </Button>
        <Button onClick={handleSave} variant="contained">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
