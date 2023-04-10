import React from 'react'
import TimeContainerInner from "./TimeContainerInner"
const TimeContainer = (props) => {
    const mylist = props.time_list
    return (
        <div className='timedivHour'>
            {mylist.map((item) => (
                <TimeContainerInner key={item} time={item} />
            ))}
        </div>
    )
}

export default TimeContainer
