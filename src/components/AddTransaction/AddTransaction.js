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
     console.log("yes")
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
    
    // text validation
    if(text.trim() === "" )
      validationData.text = `${text}transaction is  empty`;
    else if(text.trim().length < 3 ) 
            validationData.text = "transaction needs at least three characters";
          

    // amount validation
    console.log(amount);
    if( amount.trim() === "" || amount.trim() == 0 || amount.trim() === " " )
      validationData.amount = `Amount is  empty`;
    else { 
      var numberRegex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;
      if(!numberRegex.test(amount))
        validationData.amount = `Amount has to be a number`;
    }

    
    //if no errors return true
    if(Object.keys(validationData).length === 0){
      setErrorsMessage({});
      return true;
    }else {
      setErrorsMessage(validationData);
      return false;
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
        <div className='messages'>
          <span className='alert'>{errorsMessage.text}</span>
          <span className='alert'>{errorsMessage.amount}</span>
        </div>
        
        <div className="form-control">
          <label name="text">Transaction
          
          <input type="text" value={text} name="transaction" onChange={(e) => setText(e.target.value)} 
          placeholder="Enter text..." required />
          </label>
        </div>
        <div className="form-control">
          <label name="amount"
            >Amount <br />
            (negative - expense, positive - income)
            
          <input value={amount} name="amount" onChange={(e) => setAmount(e.target.value.trim())} 
          placeholder="Enter amount..."  />
          {/* <input type="number" value={amount} name='amount' onChange={(e) => setAmount(e.target.value.trim())} 
          placeholder="Enter amount..." required /> */}
          </label>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
