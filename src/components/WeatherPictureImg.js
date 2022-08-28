import React from 'react';

import cloudy from '../images/weather_svg/cloudy.svg'
import rainy from '../images/weather_svg/rain.svg'
import snow from '../images/weather_svg/snow.svg'
import sunny from '../images/weather_svg/clear-day.svg'
import thunderstorm from '../images/weather_svg/thunderstorms.svg'
const WeatherPictureImg = (props) => {
    const {currentWeather} = props
    let curWeather;
    switch (currentWeather) {
        case 'Clouds':
            curWeather = cloudy
            break
        case 'Rain':
            curWeather = rainy
            break
        case 'Snow':
            curWeather = snow
            break
        case 'Thunderstorm':
            curWeather = thunderstorm
            break
        default:
            curWeather = sunny
    }


    return (
        <img onClick={()=>console.log('aaa')} src={curWeather} className={props.class}/>
    );
};

export default WeatherPictureImg;