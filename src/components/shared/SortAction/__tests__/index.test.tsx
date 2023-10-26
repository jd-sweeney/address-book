import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SortAction from '..';

const renderComponent = (
  defaultSort?: 'asc' | 'desc',
  onSort?: (value: string) => void
) => render(<SortAction onSort={onSort} defaultSort={defaultSort} />);

describe('SortAction', () => {
  it('should render the sort box component', () => {
    renderComponent();

    expect(screen.getByLabelText('Sort List')).toBeVisible();
    expect(screen.getByDisplayValue('Asc')).toBeVisible();
  });

  it('should select desc when clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByLabelText('Sort List'));
    await userEvent.click(
      screen.getByRole('option', {
        name: 'Desc',
      })
    );

    expect(screen.getByDisplayValue('Desc')).toBeVisible();
  });

  it('should select asc when clicked', async () => {
    renderComponent('desc');

    await userEvent.click(screen.getByLabelText('Sort List'));
    await userEvent.click(
      screen.getByRole('option', {
        name: 'Asc',
      })
    );

    expect(screen.getByDisplayValue('Asc')).toBeVisible();
  });

  it('should call onSort when selection has changed', async () => {
    const onSort = jest.fn();

    renderComponent(undefined, onSort);

    await userEvent.click(screen.getByLabelText('Sort List'));
    await userEvent.click(
      screen.getByRole('option', {
        name: 'Desc',
      })
    );

    expect(onSort).toBeCalled();
  });
});
