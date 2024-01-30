import { render, screen } from '@testing-library/react';

import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('should render properly', () => {
    render(<NotFoundPage />);

    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
