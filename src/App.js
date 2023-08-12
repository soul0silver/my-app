import './App.css'
import { Route, Routes, Router } from 'react-router-dom';

import Navbar from './view/Navbar';
import Flowers from './view/Flowers';
import Login from './view/login';
import Register from './view/Register';
import Footer from './view/Footer';
import AboutUs from './view/AboutUs'
import Detail from './view/Detail';
import { AppContext, AppProvider } from './Context/AppContext';

import Cart from './view/Cart';
import CheckoutPage from './view/Checkout';
import Home from './view/Home';
import { useContext } from 'react';
function App() {
  const { showcart,setShowcart } = useContext(AppContext);
  return (
    <>
        <div>
        <div className='header'><Navbar />
        </div>
        <Cart />

        <div className='main'  onClick={()=>setShowcart(false)}>

          <Routes>
            <Route path='/' element={<Home />} ></Route>
              <Route path="/register" element={<Register />} />
              <Route path="/flower" element={<Flowers />} />
              <Route path='/login' element={<Login />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/detail' element={<Detail />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/my-app' element={<Home />} />
            
          </Routes>

        </div>
        <Footer />
</div>
    
    </>
  );
}

export default App;
