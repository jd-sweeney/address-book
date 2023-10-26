import UserHistory from './UserHistory';

type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
  education: Omit<UserHistory, 'title'>[];
  workExperience: Omit<UserHistory, 'degree'>[];
};

export default User;
