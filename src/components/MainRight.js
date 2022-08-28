import React from 'react';
import './MainRight.css'
import WeatherCart from "./WeatherCart";

const getCards = (data) => {
    const { hourlyData } = data
    return hourlyData.map(obj=>{
        return (
                <WeatherCart
                    key={obj.dt}
                    hours={obj.hours}
                    speed={obj.wind.speed}
                    temp={Math.round(obj.main.temp-273)}
                    rain={obj['pop']}
                    weather={obj.weather[0].main}
                    typeweather={obj.weather[0].description}
            />
        )
    })
}


const MainRight = (props) => {
    const data = props.forecast
    const conditionalRender = (data) => {
        if (data.hourlyData !== undefined) return (
        <div className='cards--holder'>
            <div className='forecast--title'><span>{data.dayDate}</span></div>
            {getCards(data)}
        </div>
        )
    }
    return (
        <div className='main--right'>
            {conditionalRender(data)}
        </div>
    );
};

export default MainRight;