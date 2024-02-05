import { createAction } from '@reduxjs/toolkit';

const SET_ALERT_MODAL = 'MODAL/SET_ALERT_MODAL';
const CLOSE_ALERT_MODAL = 'MODAL/CLOSE_ALERT_MODAL';

interface AlertModalProps {
  open: boolean;
  message: string;
}
export const setAlertModal = createAction<AlertModalProps>(SET_ALERT_MODAL);
export const closeAlertModal = createAction(CLOSE_ALERT_MODAL);
