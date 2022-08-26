import React from 'react';
import './WeatherCart.css'
import WeatherPicture from './WeatherPicture.js'
import wind from '../images/wind.svg'
import rain from '../images/rain.svg'

const WeatherCart = (props) => {
    return (
        <div className='WeatherCart'>
            <div className='container'>
                <div className='WeatherCart_content'>
                    <WeatherPicture class = 'weathercart--picture'/>
                    <div className='adaptive--column'>
                        <div className='WeatherCart_time left'>
                            10:40 AM
                        </div>
                        <div className='wind-speed left'>
                            <img src={wind} className='weathercart--wind'/>
                            1.64 km/h
                        </div>
                    </div>
                    <div className='adaptive--column right'>
                        <div className='WeatherCart_weather'>
                            25 C
                        </div>
                        <div className='rain-prob'>
                            <img src={rain} className='weathercart--rain'/>
                            25%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCart;
