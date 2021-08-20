import MaleAvatar from '../../vendor/male-avatar.png';
import FemaleAvatar from '../../vendor/female-avatar.png';

import './style.css';

const Card = ({ gender, name, role }) => {
  let avatar;
  if (gender) {
    avatar = FemaleAvatar;
  } else {
    avatar = MaleAvatar;
  }
  return (
    <div className="card">
      <img src={avatar} alt="avatar" />
      <div className="card-container">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default Card;
