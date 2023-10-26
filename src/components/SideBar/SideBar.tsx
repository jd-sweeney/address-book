import { Card, CardHeader, CardBody, Divider } from '@nextui-org/react';

const SideBar = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
  <Card className="h-full w-full max-w-[20rem] rounded-none">
    <CardHeader>Address Book</CardHeader>
    <Divider />
    <CardBody>{children}</CardBody>
    <Divider />
  </Card>
);

export default SideBar;
