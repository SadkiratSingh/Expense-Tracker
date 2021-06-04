import React,{useState} from 'react';
import './ExpenseForm.css'; // This CSS is added to CSSOM

function ExpenseForm(){
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const onTitleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    }
    const onDateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    }
    const onAmountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <form onSubmit = {onSubmitHandler}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value = {enteredTitle}
                        onChange = {onTitleChangeHandler}
                    />
                </div>

                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input 
                        type='amount' 
                        value = {enteredAmount}
                        onChange = {onAmountChangeHandler}
                        min='0.01'
                    />
                </div>

                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input 
                        type='date'
                        value = {enteredDate} 
                        onChange = {onDateChangeHandler}
                        min = "2019-01-01"
                        max = "2022-12-31"
                    />
                </div>

                <div className = 'new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm