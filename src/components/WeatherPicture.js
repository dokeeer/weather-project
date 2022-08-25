import React from 'react';
import weather from '../images/weatherpic.svg'

const WeatherPicture = () => {
    return (
        <img src ={weather} className='weatherpicture--picture'/>
    );
};

export default WeatherPicture;