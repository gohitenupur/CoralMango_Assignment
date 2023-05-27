import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TablePage from './TablePage';
import CardPage from './CardPage';
import ES6BasicsPage from './ES6BasicsPage';

function Comman() {
  return (
    <>
      <Router>
      <Route path="/table" component={TablePage} />
      <Route path="/card" component={CardPage} />
      <Route path="/es6-basics" component={ES6BasicsPage} />
    </Router>
    </>
  )
}

export default Comman
