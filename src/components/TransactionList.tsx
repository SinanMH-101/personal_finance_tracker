import { observer } from 'mobx-react-lite';
import { transactionStore } from '../store/TransactionStore';

export const TransactionList = observer(() => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactionStore.transactions.map((t) => (
          <li key={t.id}>
            {t.label}: ${t.amount.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
});
