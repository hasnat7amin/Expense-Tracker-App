import React from 'react'

class addHistroy extends React.Component{
    render(){
        return(
            <div>
                <li><span>{this.props.discription}</span> <span>{this.props.amount}</span></li>
            </div>
           )
    }
    
}
export default addHistroy