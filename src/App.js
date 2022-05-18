import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import MakeAppointment from './Pages/Appointment/MakeAppointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';

import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Reviews from './Pages/Reviews/Reviews';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>

        
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/makeappointment' element={<MakeAppointment></MakeAppointment>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='registration' element={<Registration></Registration>}></Route>

        
      </Routes>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
