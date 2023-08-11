import './App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from './view/Navbar';
import Flowers from './view/Flowers';
import Login from './view/login';
import Register from './view/Register';
import Footer from './view/Footer';
import AboutUs from './view/AboutUs'
import Detail from './view/Detail';
import { AppProvider } from './Context/AppContext';

import Cart from './view/Cart';
import CheckoutPage from './view/Checkout';
import Home from './view/Home';
function App() {

  return (
    <>
      <AppProvider>
        
          <div className='header'><Navbar />
            </div>
                <Cart />
          
          <div className='main'>
          <Home />
            <Routes>
              <Route path='/' element={ <Home />} >
              <Route path="/register" element={<Register />}/>
              <Route path="/flower" element={<Flowers />} />
              <Route path='/login' element={<Login />} />
              <Route path='/aboutus' element={<AboutUs />} />
              <Route path='/detail' element={<Detail />} />
            <Route path='/checkout' element={<CheckoutPage />} />
          </Route>
            </Routes>
          </div>
          <Footer />
        
    </AppProvider >
    </>
  );
}

export default App;
