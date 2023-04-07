import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo-container">
          <h1>Math Magicians</h1>
        </div>
        <div className="nav-links">
          <p><Link style={{ textDecoration: 'none' }} to="/">Home</Link></p>
          <p><Link style={{ textDecoration: 'none' }} to="/calculator">Calculator</Link></p>
          <p><Link style={{ textDecoration: 'none' }} to="/quote">Quote</Link></p>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </div>
  );
}

export default App;
