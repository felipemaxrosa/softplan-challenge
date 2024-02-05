import { Provider, Selector, useSelector } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import { UsersTable } from './UsersTable';
import store from '../../../store';
import { selectActiveUser, selectIsAdminUser } from '../../../store/selectors';
import { User } from '../../../models/interfaces';
import { Profile } from '../../../models/enums';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

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

const users = [adminUserMock, userMock];

const handleMockSelector = (selector: Selector<unknown, unknown>) => {
  switch (selector) {
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

interface ComponentProps {
  tableRows?: User[];
}

const Component = ({ tableRows = users }: ComponentProps) => {
  return (
    <Provider store={store}>
      <UsersTable tableRows={tableRows} />
    </Provider>
  );
};

describe('UsersTable', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render the component properly', () => {
    useSelectorMock.mockImplementation(handleMockSelector);
    render(<Component />);

    expect(screen.getByTestId('users-table')).toBeInTheDocument();
  });

  it('should click on edit button', () => {
    useSelectorMock.mockImplementation(handleMockSelector);
    render(<Component />);

    fireEvent.click(screen.getByTestId('users-table-edit-button-user-1'));
    expect(store.getState().user.showUserModal).toBeTruthy();
  });

  it('should click on delete button', () => {
    useSelectorMock.mockImplementation(handleMockSelector);
    render(<Component />);

    fireEvent.click(screen.getByTestId('users-table-delete-button-user-2'));
  });
});
