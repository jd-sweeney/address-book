import { screen, render } from '@testing-library/react';

import CardDetail from '..';

const renderComponent = (
  label: string,
  children: JSX.Element[] | JSX.Element
) => render(<CardDetail label={label}>{children}</CardDetail>);

describe('CardDetail', () => {
  it('should render the CardDetail Component', () => {
    renderComponent('Title Label', <>Children</>);

    expect(screen.getByText('Title Label')).toBeVisible();
    expect(screen.getByText('Children')).toBeVisible();
  });
});
