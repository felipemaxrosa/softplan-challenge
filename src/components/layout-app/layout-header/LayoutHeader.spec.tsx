import { Provider, Selector, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store';
import { LayoutHeader } from './LayoutHeader';
import {
  selectHasActiveUser,
  selectUserInitialLetter,
} from '../../../store/selectors';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const useSelectorMock = useSelector as jest.MockedFunction<typeof useSelector>;

const handleMockSelector = (selector: Selector<unknown, unknown>) => {
  switch (selector) {
    case selectUserInitialLetter: {
      return 'A';
    }
    case selectHasActiveUser: {
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
      <LayoutHeader />
    </Provider>
  );
};

describe('LayoutHeader', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('should render the component properly', () => {
    useSelectorMock.mockImplementation(handleMockSelector);

    render(<Component />);
    expect(screen.getByTestId('app-layout-header')).toBeInTheDocument();
  });
});
