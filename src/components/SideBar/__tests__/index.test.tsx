import { screen, render } from '@testing-library/react';

import SideBar from '..';

const renderComponent = (children: JSX.Element) =>
  render(<SideBar>{children}</SideBar>);

describe('SideBar', () => {
  it('should render the sidebar', () => {
    renderComponent(<>Children</>);

    expect(screen.getByText('Address Book')).toBeVisible();
    expect(screen.getByText('Children')).toBeVisible();
  });
});
