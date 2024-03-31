import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance/Balance';
import { IncomeExpenses } from './components/IncomeExpense/IncomeExpenses';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <AddTransaction />
        <div className="balance"> 
          <Balance/>
          <IncomeExpenses />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
