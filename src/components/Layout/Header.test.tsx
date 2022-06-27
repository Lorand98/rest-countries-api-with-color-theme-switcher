import { screen, render } from '@testing-library/react';
import { APP_TITLE } from '../../constants';
import Header from './Header';

describe('The Header', () => {
  test('renders the title', () => {
    render(<Header />);

    expect(screen.getByText(APP_TITLE)).not.toBeNull();
  });
});
