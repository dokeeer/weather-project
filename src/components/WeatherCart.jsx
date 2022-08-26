import React from 'react';
import './WeatherCart.css'

const WeatherCart = () => {
    return (
        <div className='WeatherCart'>
            <div className='container'>
                <div className='WeatherCart_content'>
                    <div className='WeatherCart_time'>
                        10:40
                        <span>AM</span>
                    </div>
                    <div className='first_rows'>
                        <div className='rows_row'>
                            <div className='row_body'>
                                Humidity 38%
                            </div>
                        </div>
                        <div className='rows_row'>
                            <div className='row_body'>
                                Chance of rain 2%
                            </div>
                        </div>
                    </div>
                    <div className='first_rows'>
                        <div className='rows_row'>
                            <div className='row_body'>
                                Air Quailty
                            </div>
                        </div>
                        <div className='rows_row'>
                            <div className='row_body'>
                                Wind speed 3.8 km/h
                            </div>
                        </div>
                    </div>
                    <div className='WeatherCart_weather'>
                        25 C
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCart;
// <div className='columns_row'>

//     <div className='columns_column'>
//         <div className='column_body'>
//             Chance of rain 2%
//         </div>
//     </div>
//     <div className='columns_column'>
//         <div className='column_body'>
//             Air Quailty
//
//         </div>
//     </div>
//     <div className='columns_column'>
//         <div className='column_body'>
//             Wind speed 3.8 km/h
//         </div>
//     </div>
// </div>