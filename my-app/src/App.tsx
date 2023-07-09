
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './PAGES/Landing/Landingpage';
import Discoverpage from './PAGES/Discover/Discoverpage';
import Joinpage from './PAGES/Join/Joinpage';
import Navbar from './components/MOLECULES/Header/Navbar';

import Chartspage from './PAGES/others/Charts/charts';
import Albumspage from './PAGES/others/Albums/albums';
import Morepage from './PAGES/others/More/more';

import "./App.css"


const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/discover" element={<Discoverpage />} />
        <Route path="/join" element={<Joinpage />} />
        <Route path="/charts" element={<Chartspage />} />
        <Route path="/albums" element={<Albumspage />} />
        <Route path="/more" element={<Morepage />} />
      </Routes>
    </Router>
  );
};


export default App;


