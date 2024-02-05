import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../store';
import { LoginPage } from './LoginPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const Component = () => {
  return (
    <Provider store={store}>
      <LoginPage />
    </Provider>
  );
};

describe('LoginPage', () => {
  it('should render properly', () => {
    render(<Component />);

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });
});
