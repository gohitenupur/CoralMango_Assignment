import React, { useState, useEffect } from 'react';
import Comman from './Comman';

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

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

  return (
    <div>
      <Comman/>
      <br/>
      <div className="container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
      />
      {isFiltered && <p>You are viewing filtered results!</p>}
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
    </div>
    </div>
  );
};

export default TableComponent;
