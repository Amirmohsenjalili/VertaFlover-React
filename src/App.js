import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Landing from './component/Landing';
import Products from './component/Products';
import AboutUs from './component/AboutUs';
import DetailsPage from './component/DetailsPage';
import Notfound from './component/Notfound';
import Programers from './component/Programmers';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>  
          <Route path='/' element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/about Us/*" element={<AboutUs />} >
            <Route path='programmers' element={<Programers />} />
            <Route path='drivers' element={<h1>Drivers</h1>}/>
          </Route>
          <Route path="/notfound" element={<Notfound />} />
          <Route path='/*' element={<Navigate to="/notfound" />}/>
        </Routes>
        <Footer />

      </div>
    );
  }
}

export default App;