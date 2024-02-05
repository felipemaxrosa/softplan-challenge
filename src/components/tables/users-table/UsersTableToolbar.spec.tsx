import { Provider, Selector, useSelector } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import store from '../../../store';
import { UsersTableToolbar } from './UsersTableToolbar';
import { selectIsAdminUser } from '../../../store/selectors';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

const handleMockSelector = (selector: Selector<unknown, unknown>) => {
  switch (selector) {
    case selectIsAdminUser: {
      return true;
    }
    default: {
      return null;
    }
  }
};

const Component = () => {
  return (
    <Provider store={store}>
      <UsersTableToolbar />
    </Provider>
  );
};

describe('UsersTableToolbar', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render the component properly', () => {
    useSelectorMock.mockImplementation(handleMockSelector);
    render(<Component />);

    expect(screen.getByTestId('users-table-toolbar')).toBeInTheDocument();
  });

  it('should find and click the Novo Usuario button', async () => {
    useSelectorMock.mockImplementation(handleMockSelector);
    render(<Component />);

    fireEvent.click(screen.getByTestId('button-new-user'));
  });
});
