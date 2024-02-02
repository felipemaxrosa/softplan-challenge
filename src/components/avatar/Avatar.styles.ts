import { Avatar, MenuItem as MuiMenuItem } from '@mui/material';
import styled from 'styled-components';

export const UserAvatar = styled(Avatar)`
  &.MuiAvatar-root {
    width: 32px;
    height: 32px;
  }
`;

export const AccountMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 16px;
  width: 160px;
  padding: 16px;
  border-radius: 12px;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32));
  z-index: 2;
  background: white;
  color: black;
`;

export const MenuItem = styled(MuiMenuItem)`
  &.MuiMenuItem-root {
    padding: 8px;
  }
`;

export const AvatarIcon = styled(Avatar)`
  &.MuiAvatar-root {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
