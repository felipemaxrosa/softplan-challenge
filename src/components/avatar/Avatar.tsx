import React, { Fragment, PropsWithChildren, useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';

import { UserAvatar, AccountMenu, AvatarIcon } from './Avatar.styles';
import { useAppDispatch } from '../../store';
import { showMyProfile } from '../../store/actions/modal-actions';
import { MenuItem } from '../shared';

export const Avatar = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleAvatarClick = () => {
    setOpen(!open);
  };

  const handleMyProfileClick = () => {
    dispatch(showMyProfile(true));
    setOpen(false);
  };

  return (
    <Tooltip title="Account settings">
      <Fragment>
        <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 2 }}>
          <UserAvatar>{children}</UserAvatar>
        </IconButton>

        {open && (
          <AccountMenu>
            <MenuItem onClick={handleMyProfileClick}>
              <AvatarIcon /> Meu Perfil
            </MenuItem>
          </AccountMenu>
        )}
      </Fragment>
    </Tooltip>
  );
};
