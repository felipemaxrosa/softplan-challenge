import { render, screen } from '@testing-library/react';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('should render properly', () => {
    render(<HomePage />);

    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});
