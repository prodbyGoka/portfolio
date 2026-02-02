import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('@vercel/analytics/react');

test('renders portfolio content', () => {
  render(<App />);
  const mottoElement = screen.getByText(/A kid who is building the future/i);
  expect(mottoElement).toBeInTheDocument();
});
