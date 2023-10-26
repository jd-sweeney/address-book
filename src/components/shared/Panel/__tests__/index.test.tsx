import { screen, render } from '@testing-library/react';

import Panel from '..';

const renderComponent = (children: JSX.Element) =>
  render(<Panel>{children}</Panel>);

describe('Panel', () => {
  it('should render the Panel Component', () => {
    renderComponent(<>Children</>);

    expect(screen.getByText('Children')).toBeVisible();
  });
});
