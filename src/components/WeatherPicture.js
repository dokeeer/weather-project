import React from 'react';
import weather from '../images/weatherpic.svg'
import sunny  from '../images/weather_svg/a_1_sunny.svg'
const WeatherPicture = (props) => {
    const {currentWeather} = props
    let curWeather;
    switch (currentWeather) {
        case 'Cloudy':
            curWeather = currentWeather
            break
        case 'Rain':
            break
        default:
            curWeather = sunny
    }


    return (
        <iframe src={sunny} className={props.class}/>
    );
};

export default WeatherPicture;