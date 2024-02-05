import React, { PropsWithChildren, useState } from 'react';
import { Divider, IconButton, Tooltip } from '@mui/material';

import { MenuItem } from '../shared';
import { useAppDispatch } from '../../store';
import { AvatarIcon, LogoutIcon } from '../icons';
import { UserAvatar, MyAccountMenu } from './Avatar.styles';
import {
  showMyProfileModal,
  userLogout,
} from '../../store/actions/user-actions';

export const Avatar = ({ children }: PropsWithChildren) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();

  const handleUserAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMyProfileClick = () => {
    dispatch(showMyProfileModal(true));
    handleCloseUserMenu();
  };

  const handleLogoutClick = () => {
    dispatch(userLogout());
  };

  return (
    <Tooltip title="Account settings">
      <div data-testid="avatar">
        <IconButton onClick={handleUserAvatarClick} size="small">
          <UserAvatar>{children}</UserAvatar>
        </IconButton>

        <MyAccountMenu
          data-testid="menu-my-account"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem onClick={handleMyProfileClick}>
            <AvatarIcon /> Meu Perfil
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleLogoutClick}>
            <LogoutIcon fontSize="small" /> Logout
          </MenuItem>
        </MyAccountMenu>
      </div>
    </Tooltip>
  );
};
