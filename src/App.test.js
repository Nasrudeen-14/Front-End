import { render, screen } from '@testing-library/react';
import Booktable from './components/Booktable';

test('renders book table and find text `Book a Table`', () => {
  render(<Booktable />);
  const headingElement = screen.getByText("Book a Table");
  expect(headingElement).toBeInTheDocument();
});
