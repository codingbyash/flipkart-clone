import './App.css';
import axios from 'axios';
import React from 'react';
import Navbar from './components/Navbar.jsx';  // Ensure the casing matches
import ImgSlider from './components/ImgSlider.jsx'; // Ensure the casing matches
import Categories from './components/Categories.jsx'; // Ensure the casing matches
import Products from './components/Products.jsx'; // Ensure the casing matches
import Footer from './components/Footer.jsx'; // Ensure the casing matches
import Login from './components/Login.jsx'; // Ensure the casing matches
import Signup from './components/Signup.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div id="body">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Categories />
            <ImgSlider />
            <Products />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Correctly set up the signup route */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
