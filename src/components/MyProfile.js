import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rockets.rockets);
  const rocketFiltered = rocketList.filter((rocket) => rocket.reserved === true);
  return (
    <div>
      <h2 className="rocketTitle"> My Rockects</h2>
      <table>
        <ul className="reservedRockets">
          { rocketFiltered.length > 0 ? (
            rocketFiltered.map((rocket) => (
              <tr key={rocket.id}>
                <td>
                  {rocket.rocketName}
                </td>
              </tr>
            ))
          ) : (
            <li>
              <p className="noReserve">No Rocket booked </p>
            </li>
          )}
        </ul>
      </table>
    </div>
  );
};

export default MyProfile;
