import { screen, render } from '@testing-library/react';

import Actions from '..';

const renderComponent = () => render(<Actions />);

describe('Actions', () => {
  it('should render the search action', () => {
    renderComponent();

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByText('Search')).toBeVisible();
  });

  it('should render the sort action', () => {
    renderComponent();

    expect(screen.getByLabelText('Sort List')).toBeVisible();
    expect(screen.getByDisplayValue('Asc')).toBeVisible();
  });
});
