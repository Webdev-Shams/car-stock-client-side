import './App.css';
import SignUp from './pages/Authentication/SignUp/SignUp';
import Login from './pages/Authentication/Login/Login';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import About from './pages/Home/About/About';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import CarStock from './pages/CarStock/CarStock';
import AddCar from './pages/AddCar/AddCar';
import Cars from './pages/Cars/Cars';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/cars' element={<Cars></Cars>}></Route>
        <Route path='/manage' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addcar' element={<AddCar></AddCar>}></Route>
      <Route path='/car/:carId' element={<CarStock></CarStock>}></Route>
      </Routes>
      <div className='footer'>
      <Footer></Footer>
      </div>
      
    </div>
  );
}

export default App;
