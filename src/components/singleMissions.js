import React from 'react';
import ProTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinedMission, leavedMission } from '../redux/mission/missionSlice';

const singleMissions = ({ mission }) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{mission.missionName}</td>
      <td>{mission.description}</td>
      <td>
        <div className={mission?.joind ? 'member-badge active-mission' : 'member-badge'}>

         {mission?.joined ? 'Active Member' : 'NOT A MEMBER'}

        </div>
      </td>
    </tr>
  );
};

SingleMissions.proTypes = {
  mission: ProTypes.shape({
    id: ProTypes.string.isRequired,
    missionName: ProTypes.string.isRequired,
    description: ProTypes.string.isRequired,
    joined: ProTypes.bool,
  }).isRequired,
};
export
 
export default Missions;
