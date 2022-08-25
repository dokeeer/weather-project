import React from 'react';
import weather from '../images/weatherpic.svg'

const WeatherPicture = (props) => {
    return (
        <img src ={weather} className={props.class}/>
    );
};

export default WeatherPicture;