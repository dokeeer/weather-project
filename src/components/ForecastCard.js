import React from 'react';
import WeatherPicture from "./WeatherPicture";
import './ForecastCard.css'

const ForecastCard = (props) => {
    const {data} = props
    return (
        <div className='forecast' onClick={(event) =>props.click(data)}>
            <div className='forecast--temp'>{data.averageTemp} С</div>
            <WeatherPicture class='forecast--picture' currentWeather={data.averageWeather}/>
            <div className='forecast--day'>{data.dayDate.replace(' 2022', '')}</div>
            <div className='forecast--dayOfWeek'>{data.dayOfWeek}</div>
        </div>
    );
};

export default ForecastCard;