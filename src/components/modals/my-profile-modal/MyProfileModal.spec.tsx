import { Provider, useSelector } from 'react-redux';

import { MyProfileModal } from './MyProfileModal';
import { render, screen } from '@testing-library/react';
import store from '../../../store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const Component = () => {
  return (
    <Provider store={store}>
      <MyProfileModal />
    </Provider>
  );
};
const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

describe('MyProfileModal', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render the modal properly', () => {
    useSelectorMock.mockReturnValueOnce(true);

    render(<Component />);
    expect(screen.getByTestId('my-profile-modal')).toBeInTheDocument();
  });
});
