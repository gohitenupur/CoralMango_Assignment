import React, { useState, useEffect } from 'react';
import Comman from './Comman';
import './css/card.css';
import IMG1 from "./img/person1.jfif"
import IMG2 from "./img/person2.jfif"
import IMG3 from "./img/person4.jpg"

const imgData =[IMG1, IMG2, IMG3]

const CardPage = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);
  const [isCardView, setIsCardView] = useState(false);

  useEffect(() => {
    // Fetch the JSON data
    fetch('https://coralmango.com/api/react-test')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setSortedData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSort = (property) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
    setSortedData(sorted);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setSortedData(filtered);
      setIsFiltered(true);
    } else {
      setSortedData(data);
      setIsFiltered(false);
    }
  };

  const handleToggleView = () => {
    setIsCardView(!isCardView);
  };

  return (
    <div>
      <Comman />
      <br />
      <div className='container'>
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
      />
      {isFiltered && <p>You are viewing filtered results!</p>}
      <div className={`view-toggle ${isCardView ? 'card-view' : 'table-view'}`}>
        <button onClick={handleToggleView}>
          {isCardView ? 'Switch to Table View' : 'Switch to Card View'}
        </button>
      </div>
      <br/>
      {!isCardView ? (
        <div className="card-list">
          {sortedData.map((item, index) => (
            <div className="card" key={index}>
              <img src={imgData[index]} alt="Person" />
              <div className="card-details">
                <h3>{item.name}</h3>
                <h3>{item.occupation}</h3>
                <p>{`${item.age} years`}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('age')}>Age</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default CardPage;
