import React from 'react';

import { Header } from './LayoutHeader.styles';
import { SoftplanImage } from '../../../assets/images';
import { useAppSelector } from '../../../store';
import {
  selectHasActiveUser,
  selectUserInitialLetter,
} from '../../../store/selectors';
import { Avatar } from '../../avatar/Avatar';

export const LayoutHeader = () => {
  const userInitialLetter = useAppSelector(selectUserInitialLetter);
  const hasActiveUser = useAppSelector(selectHasActiveUser);

  return (
    <Header>
      <SoftplanImage />
      {hasActiveUser && <Avatar>{userInitialLetter}</Avatar>}
    </Header>
  );
};
