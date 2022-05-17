import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';

import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Reviews from './Pages/Reviews/Reviews';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='registration' element={<Registration></Registration>}></Route>

        
      </Routes>
      
    </div>
  );
}

export default App;
