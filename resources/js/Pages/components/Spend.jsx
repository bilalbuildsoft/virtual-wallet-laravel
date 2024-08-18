// src/Components/Spend.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Spend = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/spend', { amount })
      .then(response => {
        setMessage('Spend successful!');
        setAmount('');
      })
      .catch(error => {
        setMessage('There was an error spending the money.');
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <h2>Spend Money</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Spend</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Spend;
 