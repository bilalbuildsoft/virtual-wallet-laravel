// src/Components/Balance.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    axios.get('/getbalance')
      .then(response => {
        console.log("balance",response);
        setBalance(response.data.balance); // Adjust according to your API response
      })
      .catch(error => {
        console.error('There was an error fetching the balance!', error);
      });
  }, []);

  return (
    <div>
      <h2>Balance</h2>
      <p>{balance !== null ? `$${balance}` : 'Loading...'}</p>
    </div>
  );
};

export default Balance;
