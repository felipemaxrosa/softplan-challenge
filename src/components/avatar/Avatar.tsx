import React, { Fragment, PropsWithChildren, useState } from 'react';
import { IconButton, MenuItem, Tooltip } from '@mui/material';

import { UserAvatar, AccountMenu } from './Avatar.styles';

export const Avatar = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const handleAvatarClick = () => {
    setOpen(!open);
  };

  const handleMenuClose = () => setOpen(false);

  return (
    <Tooltip title="Account settings">
      <Fragment>
        <IconButton
          onClick={handleAvatarClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <UserAvatar>{children}</UserAvatar>
        </IconButton>

        {open && (
          <AccountMenu>
            <MenuItem onClick={handleMenuClose}>
              <Avatar /> Meu Perfil
            </MenuItem>
          </AccountMenu>
        )}
      </Fragment>
    </Tooltip>
  );
};
