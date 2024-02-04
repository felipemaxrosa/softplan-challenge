import { UserTableHeadCell } from '../models/interfaces';

export const USER_TABLE_HEADS: UserTableHeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: false,
    label: '#ID',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: false,
    label: 'Nome do usuário',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email do usuário',
  },
  {
    id: 'profile',
    numeric: false,
    disablePadding: false,
    label: 'Perfil do usuário',
  },
];
