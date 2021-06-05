import React,{useState}  from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

function Expenses(props){
    const expenses = props.expenses;
    const [year,setYear] = useState('2020');
    const onSelectYearHandler = (yearSelected) =>{
        setYear(yearSelected);
    }
    const filteredList = expenses.filter((expense) => expense.date.getFullYear() === parseInt(year));

    return(
        <Card className='expenses'>
            <ExpensesFilter selectedYear = {year} onSelectYear = {onSelectYearHandler}/>
            <ExpensesChart expenses = {filteredList} />
            <ExpensesList items = {filteredList} />
        </Card>
    )
}

export default Expenses;