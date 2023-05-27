import './App.css';

import Comman from './components/Comman';
import LoginPage from './components/LoginPage';
import TablePage from './components/TablePage';
import CardPage from './components/CardPage';
import ES6BasicsPage from './components/ES6BasicsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/comman" element={<Comman />} />
                    <Route path="/table" element={<TablePage />} />
                    <Route path="/card" element={<CardPage />} />
                    <Route path="/es6-basics" element={<ES6BasicsPage />} />
                </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
