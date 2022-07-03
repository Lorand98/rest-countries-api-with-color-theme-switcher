import { render, screen } from '@testing-library/react';
import { AlertSeverity } from '../../types';
import Alert from './Alert';

describe('Alert component', () => {
  const alertMessage = 'ERROR';
  test('renders children', () => {
    render(<Alert>{alertMessage}</Alert>);

    expect(screen.getByText(alertMessage));
  });

  test('applies the alert--error class to the <p> if the severity is "SEVERE"', () => {
    const contaoner = render(
      <Alert severity={AlertSeverity.SEVERE}>{alertMessage}</Alert>
    );

    const container = screen.getByText(alertMessage);

    expect(container.classList.contains('alert--error')).toBe(true);
  });
});
