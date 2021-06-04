import React,{useState}  from 'react';
import './Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props){
    const expenses = props.expenses;
    const [year,setYear] = useState('2020');
    const onSelectYearHandler = (yearSelected) =>{
        setYear(yearSelected);
    }
    return(
        <Card className='expenses'>
            <ExpensesFilter selectedYear = {year} onSelectYear = {onSelectYearHandler}/>
            {
                expenses.map(expense =>
                    <ExpenseItem 
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />)
            }
        </Card>
    )
}

export default Expenses;