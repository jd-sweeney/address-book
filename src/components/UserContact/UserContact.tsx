import Icon from '@/components/shared/Icon';

const UserContact = ({
  type,
  contact,
}: {
  type: 'phone' | 'email';
  contact: string;
}) => (
  <span className="flex items-center">
    <span className="w-8 h-8 p-2 mr-4">
      <Icon type={type} />
    </span>
    <span>{contact}</span>
  </span>
);

export default UserContact;
