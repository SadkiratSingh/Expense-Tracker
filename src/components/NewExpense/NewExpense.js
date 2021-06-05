import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';


function NewExpense(props){
    const [startCreatingExpense,setStartCreatingExpense] = useState(false);

    function onCreateExpenseHandler(expense){
        props.onAddExpense({...expense,id:Math.random().toString()});
        setStartCreatingExpense(false);
    }
    function startCreatingExpenseHandler(){
        setStartCreatingExpense(true);
    }
    function cancelCreatingExpenseHandler(){
        setStartCreatingExpense(false);
    }
    return (
        <div className = 'new-expense'>
            {
                startCreatingExpense ? (
                    <ExpenseForm onCreateExpense = {onCreateExpenseHandler} onCancelCreatingExpense ={cancelCreatingExpenseHandler}/>
                ):(
                    <button onClick = {startCreatingExpenseHandler}>CreateNewExpense</button>
                )
            }
        </div>
    )
}

export default NewExpense;