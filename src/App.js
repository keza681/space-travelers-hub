import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Header/Nav';
import MissionList from './components/Missions/Missions';
import RocketList from './components/HomeRocket/HomeRocketList';
import Myprofile from './components/HomeRocket/MyProfile';
import './styles/style.css';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<RocketList />} />
      <Route path="/missions" element={<MissionList />} />
      <Route path="/myprofile" element={<Myprofile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
