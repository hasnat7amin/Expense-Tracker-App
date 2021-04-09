import React,{useState, ReactDOM}from 'react'
import './Home.css'
import AddHistroy from './addHistroy'
function Home() {
    let [TransactionList, SetTransactionList] = useState([]);
    let [current_balance,setcurrent_balance] = useState(0);
    let [expenses,setexpenses] = useState(0);
    let [income,setincome] = useState(0);

    let [textInput,settextInput] = useState("");
    let [amount, setamount]= useState(0);
    
    let submitbtnclick = (e) => {
        if(textInput !== ''){
            
            let disValue = textInput
            let amountValue = parseInt(amount)
            console.log(disValue);
            console.log(amountValue);
            let TempList = {
                desc : disValue,
                amount : amountValue
            }
            SetTransactionList([...TransactionList, TempList])
            if(amountValue  < 0 ){
                let b = expenses- Math.abs(amountValue)
                setexpenses(b)
                console.log("Expenses",expenses)
                let c =  current_balance - Math.abs(amountValue)
                setcurrent_balance(c)
                console.log("current_balance",current_balance)
            }
            
            else{
                let ab = income
                let a = Math.abs(amountValue) + ab
                setincome(a)
                console.log("income",income)

                let c =  current_balance + Math.abs(amountValue)
                setcurrent_balance(c)
                console.log("current_balance",current_balance)

            }
            settextInput("");
            setamount(0);
            //ReactDOM.render(<addHistroy discription={disValue} amount={amountValue} />);
            //<addHistry discription={disValue} amount={amountValue}/>
            //<li><span>{disValue}</span> <span>{amountValue}</span></li>
        }
        else{
            alert("Please fill the Input fields")
        }
        
    }
    console.log(textInput);
    console.log(amount);
        return(
            <div className="whole">
                <div className='whole1'>
                <h1>Expense Tracker APP</h1>
                <div className='part1'>
                    <h3>Your current Balance <br></br> <span>{current_balance}</span></h3>
                    <div className="details">
                        <h4>Your Income  <br></br><span>{income}</span></h4>
                        <h4>Your Expenses  <br></br> <span>{expenses}</span></h4>
                    </div>
                        <h4>History</h4> 
                       <div className="cont"> {
                            TransactionList.map((item, index)=>
                                <AddHistroy TransactionList={TransactionList} SetTransactionList={SetTransactionList} item={item} desc={item.desc} amount={item.amount} index={index}/>
                            )
                        }
                    </div>
                    <h4>Add Transaction</h4>
                    <input className="inputfields" type='text' placeholder="Enter your Discription"  required onChange={(e)=>{textInput=e.target.value}} ></input><br />
                    <input className="inputfields" type='integer' placeholder='Enter your Amount' required  onChange={(e)=>{amount=e.target.value}} ></input><br />
                    <input className="inputfields submit" type='submit' onClick={submitbtnclick}></input><br />
                </div>
                </div>
            </div>
            
        )
        
    }

export default Home