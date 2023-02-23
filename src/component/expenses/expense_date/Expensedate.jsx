import React from "react";
import './Expensedate.css';
const Expensedate = (props) => {
    const {date} = props;

    const year = new Date().getFullYear();
    const month = new Date().toLocaleDateString('en-Us',{month: 'long'});
    const day = date.toLocaleDateString('en-Us', {day: '2-digit'});

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default Expensedate;