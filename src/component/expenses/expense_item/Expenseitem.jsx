import React ,{useState} from "react";
import './Expenseitem.css';
import Expensedate from "../expense_date/Expensedate";

const ExpenseItem = (props = {}) => { 

        const [title, setTitle] = useState(props.title);
        const [amount, setAmount] = useState(props.amount);
        const [date, setDate] = useState(props.date);
    function onChangeClick (event) {
        setTitle('Updated');
        setAmount('1000');
        setDate(new Date());
        
    }
    return(
        <div className="expense-item">
            <Expensedate date={date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            
        </div>
        
    )
}

export default ExpenseItem;