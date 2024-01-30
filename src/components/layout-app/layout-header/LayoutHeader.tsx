import React from 'react';

import { Header, UserAvatar } from './LayoutHeader.styles';
import { SoftplanImage } from '../../../assets/images';

export const LayoutHeader = () => {
  return (
    <Header>
      <SoftplanImage />
      <UserAvatar>F</UserAvatar>
    </Header>
  );
};
