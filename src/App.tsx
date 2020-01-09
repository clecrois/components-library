import './App.css';

import React from 'react';

import { Button } from './components';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>My component library</h1>
      <Button label="Click me!"  />
    </div>
  );
}

export default App;
