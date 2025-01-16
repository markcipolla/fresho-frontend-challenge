import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()

test('renders the example data', () => {
  render(<App />);
  const exampleDataTable = screen.getByTestId("example-data");
  expect(exampleDataTable).toBeInTheDocument();
});
