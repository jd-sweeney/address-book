import { FC } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ActionsList from '..';

const renderComponent = (
  list: any[],
  Component: FC<any>,
  onSelect?: (item: any) => void
) =>
  render(<ActionsList list={list} Component={Component} onSelect={onSelect} />);

describe('ActionsList', () => {
  const data = [
    {
      id: 'test1',
      value: 'value2',
    },

    {
      id: 'test2',
      value: 'value1',
    },
  ];

  const mockComponent = ({ value }: { value: string }) => <>{value}</>;

  it('should render the sort box component', () => {
    renderComponent(data, mockComponent);

    expect(screen.getByLabelText('Sort List')).toBeVisible();
    expect(screen.getByDisplayValue('Asc')).toBeVisible();
  });

  it('should render the search action', () => {
    renderComponent(data, mockComponent);

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByText('Search')).toBeVisible();
  });

  it('should render the list', () => {
    renderComponent(data, mockComponent);

    expect(
      screen.getByRole('listbox', {
        name: 'list',
      })
    ).toBeVisible();
    expect(screen.getByText('value1')).toBeVisible();
    expect(screen.getByText('value2')).toBeVisible();
  });

  it('should call onSelect when an item has been clicked', async () => {
    const onSelectSpy = jest.fn();

    renderComponent(data, mockComponent, onSelectSpy);

    await userEvent.click(screen.getByText('value1'));

    expect(onSelectSpy).toBeCalled();
  });
});
