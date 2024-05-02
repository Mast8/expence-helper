import React, {useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  //const sign = transaction.amount < 0 ? '-' : '+';
  const customAmount = transaction.amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
     {/*  {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> */}
      {transaction.text} <span>${customAmount}</span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
  )
}
