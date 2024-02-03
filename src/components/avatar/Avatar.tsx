import React, {
  Fragment,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Divider, IconButton, Tooltip } from '@mui/material';

import { MenuItem } from '../shared';
import { useAppDispatch } from '../../store';
import { AvatarIcon, LogoutIcon } from '../icons';
import { UserAvatar, AccountMenu } from './Avatar.styles';
import { setActiveUser } from '../../store/actions/user-actions';
import { showMyProfile } from '../../store/actions/modal-actions';

export const Avatar = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleAvatarClick = () => {
    setOpen(!open);
  };

  const handleMyProfileClick = () => {
    dispatch(showMyProfile(true));
    setOpen(false);
  };

  const handleLogoutClick = () => {
    dispatch(setActiveUser(undefined));
  };

  const handleClickOutside = (event: any) => {
    if (!menuRef?.current?.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
  }, []);

  return (
    <Tooltip title="Account settings">
      <Fragment>
        <IconButton onClick={handleAvatarClick} size="small" sx={{ ml: 2 }}>
          <UserAvatar>{children}</UserAvatar>
        </IconButton>

        {open && (
          <AccountMenu ref={menuRef}>
            <MenuItem onClick={handleMyProfileClick}>
              <AvatarIcon /> Meu Perfil
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogoutClick}>
              <LogoutIcon fontSize="small" /> Logout
            </MenuItem>
          </AccountMenu>
        )}
      </Fragment>
    </Tooltip>
  );
};
