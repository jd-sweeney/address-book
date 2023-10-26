import UserAvatar from '../UserAvatar';
import CardDetail from '../shared/CardDetail';
import UserHistory from '../UserHistory';
import UserContact from '../UserContact';

import User from '@/types/User';

const UserProfile = ({ user }: { user: User }) => (
  <div className="m-8">
    <UserAvatar
      name={user.name}
      description={user.workExperience?.[0]?.title as string}
      imageUrl={user.imageUrl}
    />
    <CardDetail label="Contact">
      <div>
        <UserContact type="phone" contact={user.phone} />
        <UserContact type="email" contact={user.email} />
      </div>
    </CardDetail>
    <CardDetail label="Experience">
      <UserHistory userHistory={user.workExperience} />
    </CardDetail>
    <CardDetail label="Education">
      <UserHistory userHistory={user.education} />
    </CardDetail>
  </div>
);

export default UserProfile;
