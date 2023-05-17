import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/rockets.css';
import Navbar from './components/Navbar';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MyProfile />} />
          <Route exact path="missions" element={<Missions />} />
          <Route exact path="rockets" element={<Rockets />} />
          <Route exact path="dragons" element={<Dragons />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
