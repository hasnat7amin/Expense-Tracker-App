import React from 'react'
import './addHistroy.css'
function addHistroy({TransactionList,SetTransactionList, item, desc, amount,index}) {
    const handleRemoveItem = e => {
        const name = e.target.getAttribute("name")
        console.log(e.target.name)
        console.log("i don't know",TransactionList.slice(TransactionList.indexOf(item, 1)))
        SetTransactionList(TransactionList.filter(item => item.desc !== name))
    }
        return(
            <div className="addHistroy">
                <div className="container">
                    <div className="box1">{desc}
                    </div>
                    <div className="box2">{amount}
                    </div>
                    {/* <span className="delete" name={desc} onClick={handleRemoveItem}>X</span> */}
                </div>
            </div>
           )
    }
    

export default addHistroy