import React from 'react';
import { useSelector } from 'react-redux';
import { allMissions } from '../redux/mission/missionSlice';

const MyProfile = () => {
  const rocketList = useSelector((state) => state.rockets.rockets);
  const { dragons } = useSelector((store) => store.dragons);
  const rocketFiltered = rocketList.filter((rocket) => rocket.reserved === true);
  const filteredDragons = dragons.filter((dragon) => dragon.reserved === true);
  const missions = useSelector(allMissions);
  const missionsArray = missions.filter((mission) => mission.joined);

  return (
    <>
      <div className="ProfileContainer">
        <section className="myMissions">
          <span className="sectionTitle">My Missions</span>
          {missionsArray.length > 0 ? (
            <ul className="myMissionsList">
              {missionsArray.map((mission) => {
                if (mission?.joined) {
                  return (
                    <li className="item" key={mission.id}>
                      {mission.missionName}
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          ) : (
            <span>No Missions Joined</span>
          )}
        </section>
      </div>
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
      <div>
        <h2 className="rocketTitle"> My Dragons</h2>
        <table>
          <ul className="reservedRockets">
            { filteredDragons.length > 0 ? (
              filteredDragons.map((dragon) => (
                <tr key={dragon.id}>
                  <td>
                    {dragon.name}
                  </td>
                </tr>
              ))
            ) : (
              <li>
                <p className="noReserve">No Dragon booked </p>
              </li>
            )}
          </ul>
        </table>
      </div>
    </>
  );
};

export default MyProfile;
