import React from 'react';
import './MainLeft.css'
import wind from '../images/wind.svg'
import rain from '../images/rain.svg'
import hum from '../images/hum.svg'
import ForecastCard from "./ForecastCard";
import Search from "./Search/Search";
import WeatherPictureImg from "./WeatherPictureImg";

const isUndef = (obj) => {
    if (typeof obj !== 'undefined') return obj
    else return ''
}


const getCards = (array, click) => {
    let i=0;
    return array.map(obj =>
        <ForecastCard
            data={obj}
            click={click}
            key={i++}
            />
    )
}

const getTime = () => {
    const now = new Date()
    const minutes = now.getMinutes() >= 10? now.getMinutes() : `0${now.getMinutes()}`
    return `${now.getHours()}:${minutes}`
}

const MainLeft = (props) => {
    const conditionalRender = () => {
        if (props.data.length !== 0) return (
                <div>
                <div className='weather--main'>
                    <h1 className='degrees'>{Math.round(props.data[0].hourlyData[0].main.temp - 273)}
                        <span className='symbol'>°</span>
                        <span className='celsium'>С</span>
                    </h1>
                    <WeatherPictureImg
                        currentWeather={props.data[0].hourlyData[0].weather[0].main}
                        currentTypeWeather = {props.data[0].hourlyData[0].weather[0].description}
                        time={props.data[0].hourlyData[0].hours}
                        class='main--picture'
                    />

                </div>
                    <h1 className='weather--city'>{props.city}</h1>

                <div className='adaptive--degrees'>
                    <div className='adaptive--degrees-left'>
                        <h4 className='date'>{props.data[0].dayDate}</h4>
                        <div className='daytime'>
                            <h4 className='day'>{props.data[0].dayOfWeek}</h4>
                            <h3 className='time'>{getTime()}</h3>
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
                        <span>Hum {props.data[0].hourlyData[0].main.humidity} %</span>
                    </div>
                    <div className='break'>|</div>
                    <div className='additional--block' >
                        <img src={rain} className='additional--img'/>
                        <span>Rain {props.data[0].hourlyData[0]['pop']*100} %</span>
                    </div>
                </div>
                <div className='cardsholder'>
                    {getCards(props.data, props.changeForecast)}
                </div>
                </div>)
    }
    return (
    <div className='main--left'>
        <Search
            searchValue={props.searchValue}
            setSearchValue={props.setSearchValue}
        />
        {conditionalRender()}
    </div>)
};

export default MainLeft;