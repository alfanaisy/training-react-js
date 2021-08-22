import MaleAvatar from '../../vendor/male-avatar.png';
import FemaleAvatar from '../../vendor/female-avatar.png';

const Image = ({ gender }) => {
  let avatar;
  if (gender) {
    avatar = FemaleAvatar;
  } else {
    avatar = MaleAvatar;
  }
  return <img src={avatar} alt="avatar" />;
};

export default Image;
