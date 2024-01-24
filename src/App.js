import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Borpage from './pages/Borpage';
import PrototypeEvent from './pages/PrototypeEvent';
import Roboticsforall from './pages/Roboticsforall';
import Home from './pages/index';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap your routes in a <Routes> */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/bor" element={<Borpage />} /> {/* Borpage */}
        <Route path="/robforall" element={<Roboticsforall />} /> {/* Roboticsforall Page */}
        <Route path="/prototypeevent" element={<PrototypeEvent />} /> {/* PrototypeEvent Page */}
      </Routes>
    </Router>
  );
}

export default App;
