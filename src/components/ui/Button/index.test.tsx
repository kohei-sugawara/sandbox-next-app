import { render } from '@testing-library/react';
import { Button } from '.';

describe('ui/Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
