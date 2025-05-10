import { useState } from 'react';
import { transactionStore } from '../store/TransactionStore';

export function AddTransaction() {
  const [label, setLabel] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!label.trim() || isNaN(value)) return;

    transactionStore.addTransaction(label.trim(), value);
    setLabel('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="e.g. Salary or Groceries"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="e.g. 1000 or -200"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
}
