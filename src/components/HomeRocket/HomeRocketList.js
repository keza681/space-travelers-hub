import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRocketFromApi } from '../../Redux/reducers';
import Rock from './HomeRocketItem';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.reducers);

  useEffect(() => {
    if (!rockets.rockets[0]) {
      dispatch(getRocketFromApi());
    }
  }, []);
  return (
    <div className="rockets">
      {rockets.rockets.map((rock) => (
        <Rock key={rock.id} rock={rock} />
      ))}
    </div>
  );
};

export default RocketList;
