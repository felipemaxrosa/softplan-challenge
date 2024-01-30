import { PropsWithChildren } from 'react';

import { LayoutHeader } from './layout-header';
import { LayoutMain } from './layout-main';

export const LayoutApp = ({ children }: PropsWithChildren) => {
  return (
    <>
      <LayoutHeader />
      <LayoutMain>{children}</LayoutMain>
    </>
  );
};
