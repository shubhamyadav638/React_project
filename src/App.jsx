import React from 'react';

import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Landing from './components/pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import Contect from './components/pages/Contect';
import About from './components/pages/About';
import Cart from './components/pages/Cart';
import Ecomm from './components/pages/Ecomm';
import Dashboard from './components/pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/Contect' element={<Contect/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Cart' element={<Cart/>} />
      <Route path='/Ecomm' element={<Ecomm/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
