import { screen, render } from '@testing-library/react';

import Icon from '..';

const renderComponent = (type: 'phone' | 'email') =>
  render(<Icon type={type} />);

describe('Icon', () => {
  it('should render the phone component', () => {
    renderComponent('phone');

    expect(screen.getByLabelText('phone')).toBeVisible();
  });

  it('should render the email component', () => {
    renderComponent('email');

    expect(screen.getByLabelText('email')).toBeVisible();
  });

  it('should not render any icon component', () => {
    renderComponent('' as any);

    expect(screen.queryByLabelText('')).not.toBeInTheDocument();
  });
});
