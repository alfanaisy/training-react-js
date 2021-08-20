import Card from './Molecule/Card';

import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1 style={{}}>Profiles</h1>
      <div className="content">
        <Card gender={false} name="John Doe" role="Customer" />
        <Card gender={true} name="Jane Doe" role="Admin" />
      </div>
    </div>
  );
};

export default App;
