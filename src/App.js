import './App.css';
import { Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import TandC from './pages/TandC';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Course from './pages/Course';
import Signin from './pages/Signin';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Signup';
import Auth from './pages/Auth';

function App() {
  return (
    <div>


      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/course/:coursesId" element={<Course />} />

        <Route path='about' element={<About />} />
        <Route path='/auth/:categoryName' element={<Auth />} />

        <Route path='contact' element={<Contact />} />
        <Route path='terms-and-conditions' element={<TandC />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
    </div>

  );
}

export default App;
