import React from 'react';
import weather from '../images/weatherpic.svg'
import rainy  from '../images/rainy.svg'
const WeatherPicture = (props) => {
    const {currentWeather} = props
    let curWeather;
    switch (currentWeather) {
        case 'Cloudy':
            curWeather = currentWeather
            break
        case 'Rain':
            curWeather = rainy
            break
    }


    return (
        <iframe src={curWeather} className={props.class}/>
    );
};

export default WeatherPicture;