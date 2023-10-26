import { screen, render } from '@testing-library/react';

import UserContact from '..';

const renderComponent = (type: 'phone' | 'email', contact: string) =>
  render(<UserContact type={type} contact={contact} />);

describe('UserContact', () => {
  it('should render the phone contact', () => {
    renderComponent('phone', 'number');

    expect(screen.getByLabelText('phone')).toBeVisible();
    expect(screen.getByText('number')).toBeVisible();
  });

  it('should render the email contact', () => {
    renderComponent('email', 'address');

    expect(screen.getByLabelText('email')).toBeVisible();
    expect(screen.getByText('address')).toBeVisible();
  });
});
