import { Provider, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store';
import { UserModal } from './UserModal';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const Component = () => {
  return (
    <Provider store={store}>
      <UserModal />
    </Provider>
  );
};
const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

describe('UserModal', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render the modal properly', () => {
    useSelectorMock.mockReturnValueOnce(true);

    render(<Component />);
    expect(screen.getByTestId('my-profile-modal')).toBeInTheDocument();
    expect(screen.getByText('Meu Perfil')).toBeInTheDocument();
  });
});
