import React from 'react'
import ChartBar from './ChartBar';
import './ChartBar.css';

function Chart(props){
    return (
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint)=>(
                    <ChartBar
                        key = {datePoint.label} 
                        value = {dataPoint.value} 
                        label = {dataPoint.label}
                        maxValue = {null}
                    />
                ))
            }
        </div>
    )
}

export default Chart;