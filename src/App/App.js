import React, { useState } from 'react';
import './App.scss';

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App m-auto">
      <h2>Click Count:</h2>
      <h3>{counter}</h3>
      <button className="btn btn-success" onClick={() => setCounter(counter + 1)}>Click Me</button>
    </div>
  );
};

export default App;
