import { render, screen } from '@testing-library/react';
import { Provider, Selector, useSelector } from 'react-redux';

import {
  selectActiveUser,
  selectFilteredUsers,
  selectIsAdminUser,
} from '../../store/selectors';
import store from '../../store';
import { HomePage } from './HomePage';
import { Profile } from '../../models/enums';
import { User } from '../../models/interfaces';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const adminUserMock: User = {
  id: 1,
  email: 'admin@test.com',
  name: 'admin',
  password: 'admin',
  profile: Profile.ADMIN,
};
const userMock: User = {
  id: 2,
  email: 'user@test.com',
  name: 'user',
  password: 'user',
  profile: Profile.USER,
};

const usersMock: User[] = [adminUserMock, userMock];

const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

const handleMockSelector = (selector: Selector<unknown, unknown>) => {
  switch (selector) {
    case selectFilteredUsers: {
      return usersMock;
    }
    case selectIsAdminUser: {
      return true;
    }
    case selectActiveUser: {
      return adminUserMock;
    }
    default: {
      return null;
    }
  }
};

const Component = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};

describe('HomePage', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render properly', () => {
    useSelectorMock.mockImplementation(handleMockSelector);
    render(<Component />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
