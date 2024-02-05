import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../store';
import { LayoutApp } from './LayoutApp';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const Component = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <LayoutApp>{children}</LayoutApp>
    </Provider>
  );
};

describe('LayoutApp', () => {
  it('should render the Layout properly', () => {
    render(
      <Component>
        <div>Mock Child Component</div>
      </Component>
    );

    expect(screen.getByText('Mock Child Component')).toBeInTheDocument();
  });
});
