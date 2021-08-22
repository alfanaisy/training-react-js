import Image from '../../Atom/Image';
import UserProfile from '../../Atom/UserProfile';

import './style.css';

const Card = ({ gender, name, city, birthdate }) => {
  return (
    <div className="card">
      <Image gender={gender} />
      <UserProfile name={name} city={city} birthdate={birthdate} />
    </div>
  );
};

export default Card;
