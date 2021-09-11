import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello React text', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello React/i);
  expect(linkElement).toBeInTheDocument();
});
