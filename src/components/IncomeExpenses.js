import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './IncomeExpenses.css';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const customNumber = (number) => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const customIncome = customNumber(income);
  
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
    ).toFixed(2);
  const customExpense = customNumber(expense);
    
  return (
    <div className="inc-exp-container">
        <div>
          <h4 className="green">Income</h4>
          <p className="money-plus">{customIncome}</p>
        </div>
        <div>
          <h4 className="red">Expense</h4>
          <p className="money-minus">{customExpense}</p>
        </div>
    </div>
  )
}
