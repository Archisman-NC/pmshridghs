import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Staff from './pages/Staff/Staff';
import StudentsCorner from './pages/StudentsCorner/StudentsCorner';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Academic from './pages/Academic/Academic';
import CoCurricular from './pages/CoCurricular/CoCurricular';
import CampusSupport from './pages/CampusSupport/CampusSupport';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/students-corner" element={<StudentsCorner />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/academic" element={<Academic />} />
            <Route path="/co-curricular" element={<CoCurricular />} />
            <Route path="/campus-support" element={<CampusSupport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
