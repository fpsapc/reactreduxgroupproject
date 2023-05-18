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
      <div className="mainContainer">
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
            <span className="item">No Missions Joined</span>
          )}
        </section>
        <section className="myMissions myRockets">
          <h2 className="sectionTitle"> My Rockects</h2>
          <table>
            <ul className="reservedRockets">
              { rocketFiltered.length > 0 ? (
                rocketFiltered.map((rocket) => (
                  <tr key={rocket.id}>
                    <td className="item">
                      {rocket.rocketName}
                    </td>
                  </tr>
                ))
              ) : (
                <li>
                  <p className="noReserve item">No Rocket booked </p>
                </li>
              )}
            </ul>
          </table>
        </section>
        <section className="myMissions myDragons">
          <h2 className="sectionTitle"> My Dragons</h2>
          <table>
            <ul className="reservedRockets">
              { filteredDragons.length > 0 ? (
                filteredDragons.map((dragon) => (
                  <tr key={dragon.id}>
                    <td className="item">
                      {dragon.name}
                    </td>
                  </tr>
                ))
              ) : (
                <li>
                  <p className="noReserve item">No Dragon booked </p>
                </li>
              )}
            </ul>
          </table>

        </section>
      </div>
    </>
  );
};

export default MyProfile;
