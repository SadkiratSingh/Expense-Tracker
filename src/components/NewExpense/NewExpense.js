import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props){
    function onCreateExpenseHandler(expense){
        props.onAddExpense(expense);
    }
    return (
        <div className = 'new-expense'>
            <ExpenseForm onCreateExpense = {onCreateExpenseHandler} />
        </div>
    )
}

export default NewExpense;