import React, { Fragment, PropsWithChildren, useState } from 'react';
import { Divider, IconButton, Tooltip } from '@mui/material';

import { MenuItem } from '../shared';
import { useAppDispatch } from '../../store';
import { AvatarIcon, LogoutIcon } from '../icons';
import { UserAvatar, MyAccountMenu } from './Avatar.styles';
import { setActiveUser } from '../../store/actions/user-actions';
import { showMyProfile } from '../../store/actions/modal-actions';

export const Avatar = ({ children }: PropsWithChildren) => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const dispatch = useAppDispatch();

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleMyProfileClick = () => {
    dispatch(showMyProfile(true));
  };

  const handleLogoutClick = () => {
    dispatch(setActiveUser(undefined));
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Tooltip title="Account settings">
      <Fragment>
        <IconButton onClick={handleAvatarClick} size="small">
          <UserAvatar>{children}</UserAvatar>
        </IconButton>

        <MyAccountMenu
          id="menu-my-account"
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
      </Fragment>
    </Tooltip>
  );
};
