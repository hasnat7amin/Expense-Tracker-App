import React,{ReactDOM}from 'react'
import './Home.css'
import addHistroy from './addHistroy'
class  Home extends React.Component{
    state = {
        'discription': "",
        'current_balance' : 0,
        'income' : 0,
        'expenses' : 0,
    
    }
    
    submitbtnclick = (event) => {
        
        if(this.refs.textInput !== null && this.refs.amount !== null){
            
            let disValue = this.refs.textInput.value
            let amountValue = this.refs.amount.value
            this.setState({discription:disValue})
           
            if(amountValue  < 0 ){
                let b = this.state.expenses- Math.abs(amountValue)
                this.setState({expenses: b})
                let c =  this.state.current_balance - Math.abs(amountValue)
                this.setState({current_balance : c})
            }
            
            else{
                let ab = this.state.income
                let a = Math.abs(amountValue) + ab
                this.setState({income: a})
                let c =  this.state.current_balance + Math.abs(amountValue)
                this.setState({current_balance : c})
            }
            //ReactDOM.render(<addHistroy discription={disValue} amount={amountValue} />);
            //<addHistry discription={disValue} amount={amountValue}/>
            //<li><span>{disValue}</span> <span>{amountValue}</span></li>
        }
        
    }
    render(){
        return(
            <div className="whole">
                <div className='whole1'>
                <h1>Expense Tracker APP</h1>
                <div className='part1'>
                    <h3>Your current Balance : <span>{this.state.current_balance}</span></h3>
                    <div className="details">
                        <h4>Your Income : <span>{this.state.income}</span></h4>
                        <h4>Your Expenses : <span>{this.state.expenses}</span></h4>
                    </div>
                    {/* <h4>History</h4> */}
                    <ul className='list'>
                    
                    </ul>
                    <h4>Add Transaction</h4>
                    <input className="inputfields" type='text' placeholder="Enter your Discription" required ref="textInput"></input><br />
                    <input className="inputfields" type='integer' placeholder='Enter your Amount' required ref="amount" ></input><br />
                    <input className="inputfields submit" type='submit' onClick={this.submitbtnclick}></input><br />
                </div>
                </div>
            </div>
            
        )
        
    }
}
export default Home