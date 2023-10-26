import { Avatar } from '@nextui-org/react';

const UserAvatar = ({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl?: string;
}) => (
  <div className="flex">
    <Avatar size="lg" className="w-20 h-20 text-large" src={imageUrl} />
    <div className="m-4 mx-8">
      <p>{name}</p>
      <p>{description}</p>
    </div>
  </div>
);

export default UserAvatar;
