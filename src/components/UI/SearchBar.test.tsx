import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import { renderWithProviders } from '../../test-utils';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  //   const mockDispatch = jest.fn();
  //   jest.mock('react-redux', () => ({
  //     useSelector: jest.fn(),
  //     useDispatch: () => mockDispatch,
  //   }));

  const inputText = 'Input Test';

  test('renders input text', () => {
    renderWithProviders(<SearchBar resetPages={() => {}} />);

    const textbox = screen.getByRole<HTMLInputElement>('textbox');

    userEvent.type(textbox, inputText);

    expect(textbox.value).toBe(inputText);
  });
  test('clears text when clicking the clear icon', () => {
    renderWithProviders(<SearchBar resetPages={() => {}} />);

    const textbox = screen.getByRole<HTMLInputElement>('textbox');

    userEvent.type(textbox, inputText);

    userEvent.click(screen.getByTestId('deleteIcon'));

    expect(textbox.value).toBe('');
  });
});
