const UserProfile = ({ name, city, birthdate }) => {
  return (
    <div className="card-container">
      <h4>{name}</h4>
      <p>{city}</p>
      <p>{birthdate}</p>
    </div>
  );
};

export default UserProfile;
