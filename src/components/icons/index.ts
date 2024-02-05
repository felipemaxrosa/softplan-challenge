import styled from 'styled-components';
import { Avatar } from '@mui/material';
import { Logout as MuiLogoutIcon } from '@mui/icons-material';

export const AvatarIcon = styled(Avatar)`
  &.MuiAvatar-root {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;

export const LogoutIcon = styled(MuiLogoutIcon)`
  &.MuiSvgIcon-root {
    margin-right: 8px;
  }
`;
