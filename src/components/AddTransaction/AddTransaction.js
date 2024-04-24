import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './AddTransaction.css';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);
  const [errors,setErrors] = useState({});



  const onSubmit = e => {
    e.preventDefault();

    if(Validate(text)){
     
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
      clearFields();
      
    }
   
  }

  function Validate(text){
    const validationData ={};
    if(text.trim() === "" )
      validationData.text = "transaction is  empty";
    else if(text.length < 3 ) {
      validationData.text = "transaction needs at least three characters";
    } else {
      setErrors({});
      return true;}
    setErrors(validationData);
  }

  /* if validation 
  create  
  */


  const clearFields =() => {
    setText("");
    setAmount("");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
      <h3>Add transaction</h3>
        <span className='alert'>{errors.text}</span>
        <div className="form-control">
          <label name="text">Transaction
          
          <input type="text" value={text} name='transaction' onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text..." required />
          </label>
        </div>
        <div className="form-control">
          <label name="amount"
            >Amount <br />
            (negative - expense, positive - income)
            
          <input type="number" value={amount} name='amount' onChange={(e) => setAmount(e.target.value.trim())} 
          placeholder="Enter amount..." required />
          </label>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
