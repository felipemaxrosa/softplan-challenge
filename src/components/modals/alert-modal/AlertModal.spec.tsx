import { Provider, Selector, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store';
import {
  selectActiveUser,
  selectAlertModal,
  selectIsEditing,
  selectSelectedUser,
  selectShowUserModal,
} from '../../../store/selectors';
import { AlertModal } from './AlertModal';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

const handleMockSelector = (selector: Selector<unknown, unknown>) => {
  switch (selector) {
    case selectAlertModal: {
      return {
        open: true,
        message: 'Alguma mensagem',
      };
    }
    default: {
      return null;
    }
  }
};

const Component = () => {
  return (
    <Provider store={store}>
      <AlertModal />
    </Provider>
  );
};

describe('AlertModal', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render the modal properly', () => {
    useSelectorMock.mockImplementation(handleMockSelector);

    render(<Component />);
    expect(screen.getByTestId('alert-modal')).toBeInTheDocument();
  });

  it('should NOT render the modal properly', () => {
    useSelectorMock.mockImplementation((selector) => {
      if (selector === selectAlertModal) {
        return {
          open: false,
          message: '',
        };
      } else {
        return handleMockSelector(selector);
      }
    });

    render(<Component />);
    expect(screen.queryByTestId('alert-modal')).toBeNull();
  });
});
