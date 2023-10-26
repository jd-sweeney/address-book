import { screen, render } from '@testing-library/react';

import UserProfile from '..';

import User from '@/types/User';

const renderComponent = (user: User) => render(<UserProfile user={user} />);

describe('UserProfile', () => {
  const data = {
    id: 'id',
    name: 'user',
    email: 'address',
    phone: 'number',
    imageUrl: 'https://picsum.photos/seed/3/200/300',

    education: [
      {
        id: 'educationId',
        institution: 'education institution',
        startYear: 1990,
        endYear: 1995,
        degree: 'degree',
      },
    ],

    workExperience: [
      {
        id: 'experienceId',
        institution: 'experience institution',
        startYear: 1998,
        title: 'title',
      },
    ],
  };

  it('should render the user profile', () => {
    renderComponent(data);

    expect(screen.getByText('user')).toBeVisible();
    expect(screen.queryAllByText('title')).toHaveLength(2);

    expect(screen.getByLabelText('phone')).toBeVisible();
    expect(screen.getByText('number')).toBeVisible();

    expect(screen.getByLabelText('email')).toBeVisible();
    expect(screen.getByText('address')).toBeVisible();

    expect(screen.getByText('education institution')).toBeVisible();
    expect(screen.getByText('degree')).toBeVisible();
    expect(screen.getByText('1990 - 1995')).toBeVisible();

    expect(screen.getByText('experience institution')).toBeVisible();
    expect(screen.getByText('1998 - Present')).toBeVisible();
  });
});
