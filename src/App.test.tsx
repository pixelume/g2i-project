import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('All static text elements for intro screen are present', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to the Trivia Challenge/i);
  const instructionText = screen.getByText(
    /You will be presented with 10 True or False questions/i
  );
  const questionText = screen.getByText('Can you score 100%?');
  expect(headingElement).toBeInTheDocument();
  expect(instructionText).toBeInTheDocument();
  expect(questionText).toBeInTheDocument();
});

test('Begin button with correct background color is in document and enabled', () => {
  render(<App />);
  const beginButton = screen.getByRole('button', { name: 'Begin' });
  expect(beginButton).toHaveStyle({ backgroundColor: '#e91e63' });
  expect(beginButton).toBeEnabled();
});

test('Elements of QuestionCard component rendered after clicking BEGIN button', () => {
  render(<App />);
  const beginButton = screen.getByRole('button', { name: 'Begin' });
  userEvent.click(beginButton);
  setTimeout(() => {
    const categoryName = screen.getByTestId('category');
    expect(categoryName).toHaveTextContent(/[\s\S]*/i);
  }, 1900);
});
