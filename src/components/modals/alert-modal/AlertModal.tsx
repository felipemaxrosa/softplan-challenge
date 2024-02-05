import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store';
import { selectAlertModal } from '../../../store/selectors';
import { closeAlertModal } from '../../../store/actions/modal-actions';

export const AlertModal = () => {
  const { message, open } = useAppSelector(selectAlertModal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeAlertModal());
  };

  return (
    <Dialog
      data-testid="alert-modal"
      open={open}
      maxWidth="sm"
      fullWidth
      onClose={handleClose}
    >
      <DialogTitle>Alerta</DialogTitle>
      <DialogContent sx={{ padding: '32px 24px' }}>
        <p>{message}</p>
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button onClick={handleClose} variant="outlined">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
