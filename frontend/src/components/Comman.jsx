import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './HomePage';
import TablePage from './TablePage';
import CardPage from './CardPage';
import ES6BasicsPage from './ES6BasicsPage';
import HomePage from './HomePage';

function Comman() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/card" element={<CardPage />} />
          <Route path="/es6-basics" element={<ES6BasicsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Comman;

