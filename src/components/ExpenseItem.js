import React,{useState} from 'react';
import './ExpenseItem.css';
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    const [title,setTitle] = useState(props.title);
    const clickHandler = function(){
        setTitle('Updated!');
    }
    return(
        <Card className = 'expense-item'>
            <ExpenseDate date={props.date} />
            <div className = 'expense-item__description'>
                <h2>{title}</h2>
                <div className = 'expense-item__price'>${props.amount}</div>
            </div>
            <button type='button' onClick={clickHandler}>
                Change
            </button>
        </Card>
    )
}

export default ExpenseItem;