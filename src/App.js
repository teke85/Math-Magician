import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
