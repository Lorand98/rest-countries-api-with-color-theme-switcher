import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  //   const mockDispatch = jest.fn();
  //   jest.mock('react-redux', () => ({
  //     useSelector: jest.fn(),
  //     useDispatch: () => mockDispatch,
  //   }));

  test('renders input text', () => {
    render(
      <Provider store={store}>
        <SearchBar resetPages={() => {}} />
      </Provider>
    );

    const inputText = 'Input Test';

    userEvent.type(screen.getByRole('textbox'), inputText);

    expect(screen.getByDisplayValue(inputText).id).toBe('searchBarInput');
  });
  test('clears text when clicking the clear icon', () => {
    render(
      <Provider store={store}>
        <SearchBar resetPages={() => {}} />
      </Provider>
    );

    userEvent.click(screen.getByTestId('deleteIcon'));
  });
});
