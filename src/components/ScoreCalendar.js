import React, { useState, useEffect } from "react";
import DatePicker from 'react-date-picker'; 


const ScoreCalendar = (props) => {
    debugger

    const [date, setDate] = useState(new Date());
    
    useEffect(() =>{
        props.handleSelect(new Date(date).toLocaleDateString('en-CA'))
    }, [date] )

    const onChange = date => {
        setDate(date.toLocaleDateString('en-CA'));
    }
    
    return (
        <div className="score-calendar">
            <DatePicker selected={date} onChange={onChange} value={date} />
        </div>
    )
}

export default ScoreCalendar;



