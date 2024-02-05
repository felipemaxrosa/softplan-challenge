import { render, screen } from '@testing-library/react';

import { LoginForm } from './LoginForm';
import { Provider } from 'react-redux';
import store from '../../../store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const Component = () => {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  );
};

describe('LoginForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render properly', () => {
    render(<Component />);

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
  });
});
