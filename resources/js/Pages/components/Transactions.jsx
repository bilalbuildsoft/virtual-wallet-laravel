// src/Components/Transactions.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Transactions.css';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/transactions')
      .then(response => {
        setTransactions(response.data.transactions);
        setLoading(false);
      })
      .catch(error => {
        setError('There was an error fetching transactions.');
        setLoading(false);
        console.error('There was an error!', error);
      });
  }, []);

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Transactions</h2>
      <div className="transactions-grid">
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <div key={transaction.id} className="transaction-card">
              <p><strong>Wallet Name:</strong> {transaction.wallet_name}</p>
              <p><strong>Value:</strong> ${transaction.value}</p>
              <p><strong>From:</strong> ${transaction.from}</p>
              <p><strong>To:</strong> ${transaction.to}</p>
              <p><strong>Type:</strong> {transaction.type}</p>
              <p><strong>Status:</strong> {transaction.status}</p>
              <p><strong>IP Address:</strong> {transaction.ip}</p>
              <p><strong>Date:</strong> {new Date(transaction.created_at).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default Transactions;
