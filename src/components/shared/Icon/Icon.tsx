import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Icon = ({ type }: { type: 'phone' | 'email' }) => {
  if (!(type === 'email' || type === 'phone')) {
    return null;
  }

  return (
    <span aria-label={type}>
      {type === 'phone' && <PhoneIcon />}
      {type === 'email' && <EnvelopeIcon />}
    </span>
  );
};

export default Icon;
