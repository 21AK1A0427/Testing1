
import {  Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Events from './components/sections/Events';
import Registration from './components/sections/Registration';
import Schedule from './components/sections/Schedule';
import Team from './components/sections/Team';
import Gallery from './components/sections/Gallery';
import Sponsors from './components/sections/Sponsors';
import Contact from './components/sections/Contact';
import '..//src/components/common/Layout.css';
function App() {
  return (
      <div className="layout">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;