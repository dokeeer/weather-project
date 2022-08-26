import React from 'react';
import './MainLeft.css'
import WeatherPicture from "./WeatherPicture";
import wind from '../images/wind.svg'
import rain from '../images/rain.svg'
import hum from '../images/hum.svg'
import ForecastCard from "./ForecastCard";

const getCards = (array, click) => {
    return array.map(obj =>
        <ForecastCard
            data={obj}
            click={click}
            />
    )
}

const MainLeft = (props) => {
    if (props.data.length !== 0) return (
        <div className='main--left'>
            <div className='weather--main'>
            <WeatherPicture/>
            </div>

            <h1 className='degrees'>{Math.round(props.data[0].hourlyData[0].main.temp - 273)}
                <span className='symbol'>°</span>
                <span className='celsium'>С</span>
            </h1>
            <div className='adaptive--degrees'>
                <div className='adaptive--degrees-left'>
            <h4 className='date'>{props.data[0].dayDate}</h4>
            <div className='daytime'>
                <h4 className='day'>{props.data[0].dayOfWeek}</h4>
                <h3 className='time'>10:40 AM</h3>
            </div>
            </div>
            </div>
            <div className='additional'>
                <div className='additional--block'>
                    <img src={wind} className='additional--img'/>
                    <span>Wind {props.data[0].hourlyData[0].wind.speed} km/h</span>
                </div>
                <div className='break'>|</div>
                <div className='additional--block'>
                    <img src={hum} className='additional--img'/>
                    <span>Hum {props.data[0].hourlyData[0].main.humidity}</span>
                </div>
                <div className='break'>|</div>
                <div className='additional--block' >
                    <img src={rain} className='additional--img'/>
                    <span>Rain {props.data[0].hourlyData[0]['pop']}%</span>
                </div>
            </div>
            <div className='cardsholder'>
            {getCards(props.data, props.changeForecast)}
            </div>
        </div>
    )
    else return <div></div>
};

export default MainLeft;