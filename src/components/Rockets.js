import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  const handleReserveClick = (id) => {
    dispatch(reserveRocket({ id }));
  };

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
            <button type="button" className={rocket.reserved ? 'reservedBtn' : 'reserveBtn'} onClick={() => handleReserveClick(rocket.id)}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
