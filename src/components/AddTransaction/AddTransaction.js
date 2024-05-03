import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../context/GlobalState';
import './AddTransaction.css';


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);
  const [errorsMessage,setErrorsMessage] = useState({});



  const onSubmit = e => {
    e.preventDefault();

    if(Validate()){
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
      clearFields();
    }
   
  }

  function Validate(){
    const validationData ={};
    let validated = false;
    // text validation
    if(text.trim() === "" )
      validationData.text = `Transaction is empty`;
    else if(text.trim().length < 3 ) 
            validationData.text = "Transaction needs at least three characters";
          

    // amount validation
    console.log(amount);
    if( amount.trim() === "" )
      validationData.amount = `Amount is empty`;
    else { 
      var numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
      if(!numberRegex.test(amount))
        validationData.amount = `Amount has to be a number`;
    }

    
    //if no errors return true
    if(Object.keys(validationData).length === 0){
      setErrorsMessage({});
      validated =  true;
    }else {
      setErrorsMessage(validationData);
      
    }
    return validated;
  }

  const clearFields =() => {
    setText("");
    setAmount("");
  }

  return (
    <>
      <form onSubmit={onSubmit}>
      <h3>Add transaction</h3>
        <div className='messages'>
          <span className='alert'>{errorsMessage.text}</span>
          <span className='alert'>{errorsMessage.amount}</span>
        </div>
        
        <div className="form-control">
          <label name="text"  >Transaction
            <input type="text" id="transaction" value={text} name="transaction" onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text..." required />
          </label>
        </div>
        <div className="form-control">
          <label name="amount" >Amount (negative - expense, positive - income) 
            <input type="number" id="amount"  value={amount} name='amount' onChange={(e) => setAmount(e.target.value.trim())} 
            placeholder="Enter amount..." required />
          </label>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
