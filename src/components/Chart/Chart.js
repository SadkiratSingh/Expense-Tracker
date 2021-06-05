import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props){
    let expenditurePerMonth = props.dataPoints.map((dataPoint)=>dataPoint.value);
    let maxExpenditure = Math.max(...expenditurePerMonth);
    return (
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint)=>(
                    <ChartBar
                        key = {dataPoint.label} 
                        value = {dataPoint.value} 
                        label = {dataPoint.label}
                        maxValue = {maxExpenditure}
                    />
                ))
            }
        </div>
    )
}

export default Chart;