import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services'
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';







function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/'  Component={Home} />
        <Route path='/services' Component={Services} />
        <Route path='/products' Component={Products}/>
        <Route path='/sign-up' Component={SignUp} />                 
      </Routes>
    </Router>
    </>
   
  );
}

export default App;
