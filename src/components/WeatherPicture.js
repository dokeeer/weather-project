import React from 'react';
import weather from '../images/weatherpic.svg'
import cloudy from '../images/weather_svg/cloudy.svg'
import rainy from '../images/weather_svg/rain.svg'
import snow from '../images/weather_svg/snow.svg'
import sunny from '../images/weather_svg/clear-day.svg'
import thunderstorm from '../images/weather_svg/thunderstorms.svg'
const WeatherPicture = (props) => {
    const {currentWeather} = props
    console.log(props)
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
        <iframe src={curWeather} className={props.class}/>
    );
};

export default WeatherPicture;