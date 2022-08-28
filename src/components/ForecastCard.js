import React from 'react';
import WeatherPictureImg from "./WeatherPictureImg";
import './ForecastCard.css'

const ForecastCard = (props) => {
    const {data} = props
    return (
        <div className='forecast' onClick={(event) =>props.click(data)}>
            <div className='forecast--day'>{data.dayDate.replace(' 2022', '')}</div>
            <div className='forecast--dayOfWeek'>{data.dayOfWeek}</div>
            <WeatherPictureImg
                class='forecast--picture'
                currentWeather={data.averageWeather}
                currentTypeWeather={data.averageTypeWeather}
                time={"12:00"}
            />

            <div className='forecast--temp'>{data.averageTemp} С</div>
        </div>
    );
};

export default ForecastCard;