import React from 'react';
import Navbar from './components/Navbar.js'
import Heading from './components/Heading.js'
import Search from './components/Search.js'
import QuickLinks from './components/QuickLinks.js'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Search />
      <QuickLinks />
    </div>
  );
}

export default App;
