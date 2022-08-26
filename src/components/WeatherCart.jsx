import React from 'react';
import './WeatherCart.css'
import WeatherPicture from "./WeatherPicture";

const WeatherCart = () => {
    return (
        <div className='WeatherCart'>
            <div className='container'>
                <div className='WeatherCart_content'>
                    <div className='rows'>
                        <div className='rows_row'>
                            <div className='row_body'>
                                10:40
                                <span>AM</span>
                            </div>
                        </div>
                        <div className='rows_row'>
                            <div className='row_body'>
                                <WeatherPicture/>
                            </div>
                        </div>
                        <div className='rows_row'>
                            <div className='row_body'>
                                25 C
                            </div>
                        </div>
                        <div className='rows_row'>
                            <div className='row_body'>
                                Chance of rain 2%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCart;
