import { render } from '@testing-library/react';
import { Document } from '.';

describe('ui/Document', () => {
  it('renders correctly', () => {
    const { container } = render(<Document />);
    expect(container).toMatchSnapshot();
  });
});
