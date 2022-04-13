import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Header/Nav';
import Missions from './components/HomeRocket/HomeRocket';
import Rockets from './components/RocketList';
import MyProfile from './components/MyProfile';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
