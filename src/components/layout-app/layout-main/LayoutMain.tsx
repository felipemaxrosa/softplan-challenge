import { PropsWithChildren } from 'react';

import { Main } from './LayoutMain.styles';

export const LayoutMain = ({ children }: PropsWithChildren) => {
  return <Main data-testid="main-app">{children}</Main>;
};
