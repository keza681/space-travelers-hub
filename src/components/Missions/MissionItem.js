import React from 'react';
import { useDispatch } from 'react-redux';
import { createJoin } from '../../Redux/reducers';

const AllMissions = (props) => {
  const prop = props;
  const dispatch = useDispatch();
  const { join } = prop.mission;
  const handleJoin = (e) => {
    e.target.classList.toggle('reservedButton');
    const toggleJoin = !join;
    const setJoin = (() => ({ ...prop.mission, join: toggleJoin }));
    dispatch(createJoin(setJoin()));
  };
  return (
    <tr>
      <td className="first-col">{prop.mission.mission_name}</td>
      <td className="second-col">{prop.mission.description}</td>
      <td className="third-col">
        <p className={join ? 'member' : 'not-member'}>{join ? 'Active Member' : 'Not a Member'}</p>
      </td>
      <td className="fourth-col">
        <button onClick={(e) => handleJoin(e)} type="button">{join ? 'Leave Mission' : 'Join Mission'}</button>
      </td>
    </tr>
  );
};

export default AllMissions;
