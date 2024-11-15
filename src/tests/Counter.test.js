// import necessary react testing library helpers here
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  expect(screen.getByRole('heading')).toHaveTextContent('Counter'); 
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  expect(screen.getByTestId('count')).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);

  //Act
  userEvent.click(screen.getByText('+'));

  //Assert
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  //Act
  userEvent.click(screen.getByText('-'));
  //Assert
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
