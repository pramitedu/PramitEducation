import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import TandC from './pages/TandC';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Course from './pages/Course';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path="/course/:coursesId" element={<Course />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='terms-and-conditions' element={<TandC />} />
      <Route path='privacy-policy' element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
