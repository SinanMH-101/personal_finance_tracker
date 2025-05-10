import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { transactionStore } from "./store/TransactionStore";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

export default observer(function App() {
  useEffect(() => {
    transactionStore.loadFromLocalStorage();
  }, []);

  return (
    <div className="app">
      <h1>Personal Finance Tracker</h1>
      <h2>Balance: ${transactionStore.balance.toFixed(2)}</h2>
      <AddTransaction />
      <TransactionList />
    </div>
  );
});
