import { render, screen } from '@testing-library/react';

import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('should render properly', () => {
    render(<LoginPage />);

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
  });
});
