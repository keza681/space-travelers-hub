import { useSelector } from 'react-redux';

const Myprofile = () => {
  const GState = useSelector((state) => state.reducers);
  const resItem = GState.rockets.filter((item) => item.reserve === true);
  const misItem = GState.missions.filter((item) => item.join === true);

  return (
    <div className="wrapper_profile">
      <div className="profile">
        <h3>My Rockets</h3>
        <ul className="list">
          {resItem.map((rock) => <li key={rock.rocket_name}>{rock.rocket_name}</li>)}
        </ul>
      </div>
      <div className="profile">
        <h3>My Missions</h3>
        <ul className="list">
          {
            misItem.map((mission) => (
              <li key={mission.mission_name}>{mission.mission_name}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Myprofile;
