import { screen, render } from '@testing-library/react';

import UserHistory from '..';

import UserHistoryType from '@/types/UserHistory';

const renderComponent = (userHistory: UserHistoryType[]) =>
  render(<UserHistory userHistory={userHistory} />);

describe('UserHistory', () => {
  it('should render the user history with degree', () => {
    renderComponent([
      {
        id: 'id',
        institution: 'institution',
        degree: 'degree',
        startYear: 2000,
        endYear: 2005,
      },
    ]);

    expect(screen.getByText('institution')).toBeVisible();
    expect(screen.getByText('degree')).toBeVisible();
    expect(screen.getByText('2000 - 2005')).toBeVisible();
  });

  it('should render the user history with title', () => {
    renderComponent([
      {
        id: 'id',
        institution: 'institution',
        title: 'title',
        startYear: 2000,
        endYear: 2005,
      },
    ]);

    expect(screen.getByText('institution')).toBeVisible();
    expect(screen.getByText('title')).toBeVisible();
    expect(screen.getByText('2000 - 2005')).toBeVisible();
  });

  it('should render the user history end year as present when omitted', () => {
    renderComponent([
      {
        id: 'id',
        institution: 'institution',
        title: 'title',
        startYear: 2000,
      },
    ]);

    expect(screen.getByText('2000 - Present')).toBeVisible();
  });
});
