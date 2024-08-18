// src/Components/Deposit.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Deposit = () => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/deposit', { amount })
      .then(response => {
        setMessage('Deposit successful!');
        setAmount('');
      })
      .catch(error => {
        setMessage('There was an error making the deposit.');
        console.error('There was an error!', error);
      });
  };

  return (
    <div>
      <h2>Deposit Money</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          required
        />
        <button type="submit">Deposit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Deposit;
