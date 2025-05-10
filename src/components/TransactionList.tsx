import { observer } from 'mobx-react-lite';
import { transactionStore } from '../store/TransactionStore';

export const TransactionList = observer(() => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactionStore.transactions.map((t) => (
          <li key={t.id} className={t.amount >= 0 ? 'income' : 'expense'}>
            <span>{t.label}</span>
            <span>
              {t.amount >= 0 ? '+' : '-'}${Math.abs(t.amount).toFixed(2)}
              <button
                onClick={() => transactionStore.deleteTransaction(t.id)}
                style={{
                  marginLeft: '1rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#888',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                }}
                aria-label="Delete"
              >
                ×
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
});
