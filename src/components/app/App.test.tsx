import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from '../../store';

const Component = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test('render App component properly', () => {
  render(<Component />);
  const linkElement = screen.getByTestId('main-app');
  expect(linkElement).toBeInTheDocument();
});
