import React, { useState } from 'react';
import Comman from './Comman';
import "./css/es6.css"

const ES6BasicsPage = () => {
  const [inputArray1, setInputArray1] = useState('');
  const [inputArray2, setInputArray2] = useState('');
  const [inputArray3, setInputArray3] = useState('');
  const [result1, setResult1] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);

  // for 1st question
  const handleFormSubmit1 = (e) => {
    e.preventDefault();

    // Parse the input array string into an actual array
    const a = inputArray1.split(',').map(Number);

    // Generate result1 based on the given conditions
    const filteredArray = [];

    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) filteredArray.push(a[i]);
    }

    // Update the state with the resulting array
    setResult1(filteredArray);
  };

  // for 2nd question
  const handleFormSubmit2 = (e) => {
    e.preventDefault();

    // Parse the input array string into an actual array
    const a = inputArray2.split(',').map(Number);

    // Generate result1 based on the given conditions
    const filteredArray = [];

    for (let i = 0; i < a.length; i++) {
      filteredArray.push(a[i] * a[i]);
    }

    // Update the state with the resulting array
    setResult2(filteredArray);
  };

  // for 3rd question
  const handleFormSubmit3 = (e) => {
    e.preventDefault();

    // Parse the input array string into an actual array
    const a = inputArray3.split(',').map(Number);

    // Generate result1 based on the given conditions
    const filteredArray = [];

    for (let i = 0; i < a.length; i++) {
      if (i % 2 === 0) filteredArray.push(a[i] * a[i]);
    }

    // Update the state with the resulting array
    setResult3(filteredArray);
  };

  return (
    <div className="es6-basics-page">
      <Comman />
      <div className="container">
        <br />
        <h1 className="title">Array Manipulation [Note: Given Arrays are Ex.]</h1>
        <div className="border question">
          <h2>Question 1</h2>
          <p>Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4].</p>
          <form onSubmit={handleFormSubmit1}>
            <label>Enter an array of numbers (comma-separated):</label>
            <input
              type="text"
              value={inputArray1}
              onChange={(e) => setInputArray1(e.target.value)}
            />
            <button className="info-button" type="submit">Generate Result</button>
          </form>
          <h2>Result 1: {JSON.stringify(result1)}</h2>
        </div>
        <div className="border question">
          <h2>Question 2</h2>
          <p>Given an array const a = [1, 3, 5, 2, 4] generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16].</p>
          <form onSubmit={handleFormSubmit2}>
            <label>Enter an array of numbers (comma-separated):</label>
            <input
              type="text"
              value={inputArray2}
              onChange={(e) => setInputArray2(e.target.value)}
            />
            <button className="info-button" type="submit">Generate Result</button>
          </form>
          <h2>Result 2: {JSON.stringify(result2)}</h2>
        </div>
        <div className="border question">
          <h2>Question 3</h2>
          <p>Given an array const a = [1, 3, 5, 2, 4] generate an array result3 from a, which should be equal to [1, 25, 16].</p>
          <form onSubmit={handleFormSubmit3}>
            <label>Enter an array of numbers (comma-separated):</label>
            <input
              type="text"
              value={inputArray3}
              onChange={(e) => setInputArray3(e.target.value)}
            />
            <button className="info-button" type="submit">Generate Result</button>
          </form>
          <h2>Result 3: {JSON.stringify(result3)}</h2>
        </div>
      </div>
    </div>
  );
};

export default ES6BasicsPage;
