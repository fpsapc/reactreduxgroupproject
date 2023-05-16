import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <div>
      {rockets.map((rocket) => (
        <div className="rocketContainer" key={rocket.id}>
          <div>
            <img src={rocket.flickrImage[0]} alt="Rocket" style={{ width: '15rem' }} />
          </div>
          <div className="rocketData">
            <h2>{rocket.rocketName}</h2>
            <p>{rocket.rocketType}</p>
            <p>{rocket.description}</p>
            <button type="button" className="reserveBtn">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
