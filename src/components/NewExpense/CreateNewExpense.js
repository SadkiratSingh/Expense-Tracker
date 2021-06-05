import React from 'react';


function CreateNewExpense(props){
    return(
        <div>
            <button onClick = {() => props.onCreateNewExpense(true)}>Create New Expense</button>
        </div>
    )
}

export default CreateNewExpense;