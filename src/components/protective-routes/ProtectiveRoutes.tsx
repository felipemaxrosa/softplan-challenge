import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES } from '../../models/enums';
import { useAppSelector } from '../../store';
import { selectActiveUser } from '../../store/selectors';

export const ProtectiveRoutes = ({ children }: PropsWithChildren) => {
  const activeUser = useAppSelector(selectActiveUser);

  if (!activeUser) {
    return <Navigate to={ROUTES.LOGIN} />;
  }

  return <>{children}</>;
};
