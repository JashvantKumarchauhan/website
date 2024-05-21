import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Data/Home';
import AboutUs from './Data/AboutUs';
import ContactUs from './Data/ContactUs';
import Block from './Data/Block';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/block" element={<Block />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
