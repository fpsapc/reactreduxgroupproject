import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Missions />
        <h2>App</h2>
      </div>
    </>
  );
}

export default App;
