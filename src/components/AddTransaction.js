import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);
  const [alert, setAlert] = useState("");





  const onSubmit = e => {
    e.preventDefault();

    if(text.trim() !== ""  ){
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
      clearFields();
    }
   
  }


  const clearFields =() => {
    setText("");
    setAmount("");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
      <h3>Add transaction</h3>
        <label htmlFor="text">{alert}</label>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text..." required />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value.trim())} 
          placeholder="Enter amount..." required />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
