import React from 'react';
import WeatherPicture from "./WeatherPicture";
import './ForecastCard.css'

const ForecastCard = (props) => {
    const {data} = props
    return (
        <div className='forecast'>
            <div className='forecast--temp'>{data.degrees} С</div>
            <WeatherPicture class='forecast--picture'/>
            <div className='forecast--day'>{data.day}</div>
        </div>
    );
};

export default ForecastCard;