import { screen, render } from '@testing-library/react';

import UserAvatar from '..';

const renderComponent = (
  name: string,
  description: string,
  imageUrl?: string
) =>
  render(
    <UserAvatar name={name} description={description} imageUrl={imageUrl} />
  );

describe('UserAvatar', () => {
  it('should render the user details', () => {
    renderComponent('user', 'description');

    expect(screen.getByText('user')).toBeVisible();
    expect(screen.getByText('description')).toBeVisible();
  });

  it('should render the image', () => {
    renderComponent(
      'user',
      'description',
      'https://picsum.photos/seed/3/200/300'
    );

    const img = screen.getByRole('img', {
      name: 'avatar',
    });

    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/3/200/300');
  });
});
