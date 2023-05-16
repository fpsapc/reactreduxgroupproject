import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="missions" element={<Missions />} />
          <Route exact path="rockets" element={<Rockets />} />
          <Route exact path="/" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
