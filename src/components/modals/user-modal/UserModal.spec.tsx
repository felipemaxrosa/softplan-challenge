import { Provider, Selector, useSelector } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import store from '../../../store';
import {
  selectActiveUser,
  selectIsEditing,
  selectSelectedUser,
  selectShowUserModal,
} from '../../../store/selectors';
import { UserModal } from './UserModal';
import { Profile } from '../../../models/enums';
import { User } from '../../../models/interfaces';

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
const selectedUserMock: User = {
  id: 2,
  email: 'user@test.com',
  name: 'user',
  password: 'user',
  profile: Profile.USER,
};

const handleMockSelector = (selector: Selector<unknown, unknown>) => {
  switch (selector) {
    case selectShowUserModal: {
      return true;
    }
    case selectIsEditing: {
      return true;
    }
    case selectSelectedUser: {
      return selectedAdminUserMock;
    }
    case selectActiveUser: {
      return selectedAdminUserMock;
    }
    default: {
      return null;
    }
  }
};

const Component = () => {
  return (
    <Provider store={store}>
      <UserModal />
    </Provider>
  );
};

describe('UserModal', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render the modal properly', () => {
    useSelectorMock.mockImplementation(handleMockSelector);

    render(<Component />);
    expect(screen.getByTestId('my-profile-modal')).toBeInTheDocument();
  });

  it('should render My Profile Modal', () => {
    useSelectorMock.mockImplementation(handleMockSelector);

    render(<Component />);
    expect(screen.getByTestId('my-profile-modal')).toBeInTheDocument();
    expect(screen.getByText('Meu Perfil')).toBeInTheDocument();
  });

  it('should render Novo Usuario Modal', () => {
    useSelectorMock.mockImplementation((selector) => {
      if (selector === selectIsEditing) {
        return false;
      } else {
        return handleMockSelector(selector);
      }
    });

    render(<Component />);
    expect(screen.getByTestId('my-profile-modal')).toBeInTheDocument();
    expect(screen.getByText('Novo Usuário')).toBeInTheDocument();
  });

  it('should render Editar Usuario Modal', () => {
    useSelectorMock.mockImplementation((selector) => {
      if (selector === selectSelectedUser) {
        return selectedUserMock;
      } else {
        return handleMockSelector(selector);
      }
    });

    render(<Component />);
    expect(screen.getByTestId('my-profile-modal')).toBeInTheDocument();
    expect(screen.getByText('Editar Usuário')).toBeInTheDocument();
  });

  it('should click to close modal', () => {
    useSelectorMock.mockImplementation(handleMockSelector);

    render(<Component />);
    expect(screen.getByTestId('my-profile-modal')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('user-modal-close'));
  });
});
