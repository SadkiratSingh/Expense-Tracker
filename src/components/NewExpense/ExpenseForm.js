import React,{useState} from 'react';
import './ExpenseForm.css'; // This CSS is added to CSSOM
import CreateNewExpense from './CreateNewExpense';

function ExpenseForm(props){

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [createNewExpense,setCreateNewExpense] = useState(false);

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
            id:Math.random(),
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
        props.onCreateExpense(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    const onCancelNewExpenseHandler = (event) =>{
        setCreateNewExpense(false);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    const onCreateNewExpenseHandler = (response) =>{
        setCreateNewExpense(response);
    }
    if(!createNewExpense){
        return(
            <CreateNewExpense onCreateNewExpense = {onCreateNewExpenseHandler}/>
        )
    }
    else{
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
                        <button onClick = {onCancelNewExpenseHandler} type='button'>Cancel</button>
                        <button type='submit'>Add Expense</button>
                    </div>

                </div>
            </form>
        )
    }
}

export default ExpenseForm