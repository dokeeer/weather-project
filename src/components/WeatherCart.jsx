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
                    <div className='adaptive--column left'>
                            <div className='WeatherCart_time'>
                                {props.hours}
                            </div>
                            <div className='weathercart--temp'>
                                <span>{props.temp} C</span>
                            </div>
                    </div>
                    <WeatherPicture currentWeather={props.weather} class = 'weathercart--picture'/>
                    <div className='adaptive--column right'>
                        <div className='cont'>
                        <div className='wind-speed'>
                            <img src={wind} className='weathercart--wind'/>
                            {` ${props.speed}`}
                        </div>
                        <div className='rain-prob'>
                            <img src={rain} className='weathercart--wind'/>
                            {` ${Math.round(props.rain*100)}`}%
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCart;
