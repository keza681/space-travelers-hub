import { NavLink } from 'react-router-dom';
import logoo from '../../assets/logo.png';

const Nav = () => (
  <div className="nav">
    <nav className="myNav">
      <h1 className="header">
        <img src={logoo} className="myLogo" alt="logo" width="70px" height="70px" />
        Space Traveller&apos;s Hub
      </h1>
      <ul className="nav-link">
        <NavLink activeclassname="selected" to="/">Rockets</NavLink>
        <NavLink activeclassname="selected" id="mission" to="/missions">Missions</NavLink>
        <NavLink activeclassname="selected" to="/myprofile">My Profile</NavLink>
      </ul>
    </nav>
  </div>
);

export default Nav;
