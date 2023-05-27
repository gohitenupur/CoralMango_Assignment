import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <div>
        <Link to="/table">
          <button>Table</button>
        </Link>
        <Link to="/card">
          <button>Card</button>
        </Link>
        <Link to="/es6-basics">
          <button>ES6 Basics</button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
