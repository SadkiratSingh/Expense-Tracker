import React from 'react';
import './ExpenseForm.css'; // This CSS is added to CSSOM

function ExpenseForm(){
    const onTitleChangeHandler = (event) =>{
        console.log(event.target.value);
    }
    return(
        <form>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange = {onTitleChangeHandler}/>
                </div>

                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type='amount' />
                </div>

                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type='date' />
                </div>

                <div className = 'new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>

            </div>
        </form>
    )
}

export default ExpenseForm