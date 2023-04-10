import React, { useEffect, useState } from 'react'
import Info1Container from './Info1Container';
import axios from "axios";

const Info1 = (props) => {
    const day_list = props.day_list;
    return (
        <div className='timediv'>
            <Info1Container day="Today" setDay={props.setDay} weather_data={props.act_data[0]} />
            <Info1Container day={day_list[1]} setDay={props.setDay} weather_data={props.act_data[1]} />
            <Info1Container day={day_list[2]} setDay={props.setDay} weather_data={props.act_data[2]} />
            <Info1Container day={day_list[3]} setDay={props.setDay} weather_data={props.act_data[3]} />
            <Info1Container day={day_list[4]} setDay={props.setDay} weather_data={props.act_data[4]} />
            <Info1Container day={day_list[5]} setDay={props.setDay} weather_data={props.act_data[5]} />
            <Info1Container day={day_list[6]} setDay={props.setDay} weather_data={props.act_data[6]} />
        </div>
    )
}

export default Info1
