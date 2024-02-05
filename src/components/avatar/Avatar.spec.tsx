import { render, screen } from '@testing-library/react';

import { Avatar } from './Avatar';
import { Provider } from 'react-redux';
import store from '../../store';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const Component = () => {
  return (
    <Provider store={store}>
      <Avatar />
    </Provider>
  );
};

describe('Avatar', () => {
  it('should be render properly', () => {
    render(<Component />);

    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });
});
