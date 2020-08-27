import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';
import './TransactionList.css';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  
  const incomes = transactions.filter(e => e.amount > 0);
  const expenses = transactions.filter(e => e.amount < 0);

  return (
    <>
     <h3>Transactions</h3>
    <div className="transactions">
      <ul className="list-income">
        {incomes.map(income => (<Transaction key={income.id} transaction={income} />))}
      </ul>
      <ul className="list">
        {expenses.map(expense => (<Transaction key={expense.id} transaction={expense} />))}
      </ul>
    </div>
    </>
  )
}
