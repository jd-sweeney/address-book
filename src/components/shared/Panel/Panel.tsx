import { Card } from '@nextui-org/react';

const Panel = ({ children }: { children: JSX.Element }) => (
  <Card className="flex-auto rounded-none items-center">{children}</Card>
);

export default Panel;
