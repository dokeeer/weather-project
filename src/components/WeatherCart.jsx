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
                    <div className='WeatherCart_time'>
                        {props.hours}
                    </div>
                    <WeatherPicture hours={props} class = 'weathercart--picture'/>
                    <div className='adaptive--column'>

                        <div className='wind-speed left'>

                            {props.temp} C

                        </div>
                    </div>
                    <div className='adaptive--column right'>
                        <div className='WeatherCart_weather'>
                            <img src={wind} className='weathercart--wind'/>
                            {props.speed}

                        </div>
                        <div className='rain-prob'>
                            <img src={rain} className='weathercart--rain'/>
                            {Math.round(props.rain*100)}%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCart;
