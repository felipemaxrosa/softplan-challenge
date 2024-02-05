import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider, Selector, useSelector } from 'react-redux';

import store from '../../store';
import { Profile } from '../../models/enums';
import { User } from '../../models/interfaces';
import { ProtectiveRoutes } from './ProtectiveRoutes';
import { selectActiveUser } from '../../store/selectors';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;
const selectedAdminUserMock: User = {
  id: 1,
  email: 'admin@test.com',
  name: 'admin',
  password: 'admin',
  profile: Profile.ADMIN,
};

const handleMockSelector = (selector: Selector<unknown, unknown>) => {
  switch (selector) {
    case selectActiveUser: {
      return undefined;
    }
    default: {
      return null;
    }
  }
};

const Component = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <ProtectiveRoutes>{children}</ProtectiveRoutes>
      </MemoryRouter>
    </Provider>
  );
};

describe('ProtectiveRoutes', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should redirects to login when activeUser is not present', () => {
    useSelectorMock.mockImplementation(handleMockSelector);
    render(
      <Component>
        <div>Mock Child Component</div>
      </Component>
    );

    expect(screen.queryByText('Mock Child Component')).not.toBeInTheDocument();
  });

  it('should redirects to home when activeUser present', () => {
    useSelectorMock.mockImplementation((selector) => {
      if (selector === selectActiveUser) {
        return selectedAdminUserMock;
      } else {
        return handleMockSelector(selector);
      }
    });
    render(
      <Component>
        <div>Mock Child Component</div>
      </Component>
    );

    expect(screen.getByText('Mock Child Component')).toBeInTheDocument();
  });
});
