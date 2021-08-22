import Card from './Molecule/Card';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 style={{}}>Profiles</h1>
      <div className="content">
        <Card
          gender={false}
          name="John Doe"
          city="Jakarta Barat"
          birthdate="18-09-1990"
        />
        <Card
          gender={true}
          name="Jane Doe"
          city="Jakarta Utara"
          birthdate="21-11-1990"
        />
      </div>
    </div>
  );
};

export default App;
