import React from 'react';

import { Header } from './LayoutHeader.styles';
import {
  selectHasActiveUser,
  selectUserInitialLetter,
} from '../../../store/selectors';
import { Avatar } from '../../avatar/Avatar';
import { useAppSelector } from '../../../store';
import { SoftplanImage } from '../../../assets/images';

export const LayoutHeader = () => {
  const userInitialLetter = useAppSelector(selectUserInitialLetter);
  const hasActiveUser = useAppSelector(selectHasActiveUser);

  return (
    <Header data-testid="app-layout-header">
      <SoftplanImage />
      {hasActiveUser && <Avatar>{userInitialLetter}</Avatar>}
    </Header>
  );
};
