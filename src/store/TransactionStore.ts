import { makeAutoObservable } from 'mobx';

export type Transaction = {
  id: number;
  label: string;
  amount: number;
};

class TransactionStore {
  transactions: Transaction[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get balance() {
    return this.transactions.reduce((sum, t) => sum + t.amount, 0);
  }

  addTransaction(label: string, amount: number) {
    this.transactions.push({
      id: Date.now(),
      label,
      amount,
    });
    this.saveToLocalStorage();
  }

  loadFromLocalStorage() {
    const data = localStorage.getItem('transactions');
    if (data) {
      this.transactions = JSON.parse(data);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }
}

export const transactionStore = new TransactionStore();
