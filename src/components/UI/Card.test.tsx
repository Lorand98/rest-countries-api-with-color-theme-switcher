import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  test('renders children', () => {
    const testString = 'TEST';

    const TestCardChild: React.FC = () => {
      return <p>{testString}</p>;
    };

    render(
      <Card>
        <TestCardChild />
      </Card>
    );

    expect(screen.getByText(testString));
  });
});
