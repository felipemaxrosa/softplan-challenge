import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { selectShowMyProfileModal } from '../../../store/selectors';
import { useAppDispatch, useAppSelector } from '../../../store';
import { showMyProfile } from '../../../store/actions/modal-actions';

export const MyProfileModal = () => {
  const open = useAppSelector(selectShowMyProfileModal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(showMyProfile(false));
  };

  return (
    <Dialog
      id="success-modal"
      open={open}
      maxWidth="md"
      fullWidth
      onClose={handleClose}
    >
      <DialogTitle>Meu Perfil</DialogTitle>
      <DialogContent sx={{ padding: '32px 24px' }}>
        <DialogContentText>Alguma mensagem</DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={handleClose} variant="contained">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};
