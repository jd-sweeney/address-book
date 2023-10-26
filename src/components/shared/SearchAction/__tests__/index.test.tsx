import { screen, render, fireEvent } from '@testing-library/react';

import SearchAction from '..';

const renderComponent = (onSearch?: (value: string) => void) =>
  render(<SearchAction onSearch={onSearch} />);

describe('SearchAction', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the search box component', () => {
    renderComponent();

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByText('Search')).toBeVisible();
  });

  it('should call onSearch when input has changed', () => {
    const onSearchSpy = jest.fn();

    renderComponent(onSearchSpy);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'new input' },
    });

    expect(onSearchSpy).toBeCalled();
  });
});
