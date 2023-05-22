// App.js

import React from 'react';
import './App.css';
import Navigation from './Component/Navigation';

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navigation/>
      </div>
      <div className="content">
        <div className="search-bar">
          {/* Search bar content */}
        </div>
        <div className="logo">
          {/* Logo content */}
        </div>
        {/* Other content */}
      </div>
    </div>
  );
};

export default App;
