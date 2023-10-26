import { FC } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import List from '..';

const renderComponent = (
  list: any[],
  Component: FC<any>,
  onSelect?: (item: any) => void
) => render(<List list={list} Component={Component} onSelect={onSelect} />);

describe('List', () => {
  const data = [
    {
      id: 'test',
      value: 'value',
    },
  ];

  const mockComponent = ({ value }: { value: string }) => <>{value}</>;

  it('should render the list', () => {
    renderComponent(data, mockComponent);

    expect(
      screen.getByRole('listbox', {
        name: 'list',
      })
    ).toBeVisible();
    expect(screen.getByText('value')).toBeVisible();
  });

  it('should call onSelect when an item has been clicked', async () => {
    const onSelectSpy = jest.fn();

    renderComponent(data, mockComponent, onSelectSpy);

    await userEvent.click(screen.getByText('value'));

    expect(onSelectSpy).toBeCalled();
  });
});
