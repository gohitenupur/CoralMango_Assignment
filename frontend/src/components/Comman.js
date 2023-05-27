import React from 'react';
import './css/comman.css';



function Comman() {

  
  return (
    <>
    <div className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="https://coralmango-frontend.onrender.com/card/table" className="navbar-link">Table</a>
        </li>
        <li className="navbar-item">
          <a href="https://coralmango-frontend.onrender.com/card/card" className="navbar-link">Card</a>
        </li>
        <li className="navbar-item">
          <a href="https://coralmango-frontend.onrender.com/card/es6-basics" className="navbar-link">ES6 Basics</a>
        </li>
        
      </ul>
      <div className="logout-container">
        <button className="logout-button"><a href="/" className="navbar-logout">Logout</a></button>
      </div>
    </div>
    
    </>
    
    
  );
}

export default Comman;
