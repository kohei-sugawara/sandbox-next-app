import { render } from '@testing-library/react';
import { Link } from '.';

describe('ui/Link', () => {
  it('renders correctly', () => {
    const { container } = render(<Link />);
    expect(container).toMatchSnapshot();
  });
});
