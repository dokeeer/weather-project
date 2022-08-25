import React from 'react';
import './MainLeft.css'
import WeatherPicture from "./WeatherPicture";
import wind from '../images/wind.svg'
import rain from '../images/rain.svg'
import hum from '../images/hum.svg'
import ForecastCard from "./ForecastCard";

const getCards = () => {
    const array = [
        {
            degrees: 25,
            day: 'Tue'
        },
        {
            degrees: 25,
            day: 'Tue'
        },
        {
            degrees: 25,
            day: 'Tue'
        }
    ]
    return array.map(obj =>
        <ForecastCard
            data={obj}/>
    )
}
const MainLeft = (props) => {
    return (
        <div className='main--left'>
            <div className='weather--main'>
            <WeatherPicture/>
            </div>

            <h1 className='degrees'>26
                <span className='symbol'>°</span>
                <span className='celsium'>С</span>
            </h1>
            <div className='adaptive--degrees'>
                <div className='adaptive--degrees-left'>
            <h4 className='date'>14th Mar 22</h4>
            <div className='daytime'>
                <h4 className='day'>Monday</h4>
                <h3 className='time'>10:40 AM</h3>
            </div>
            </div>
            </div>
            <div className='additional'>
                <div className='additional--block'>
                    <img src={wind} className='additional--img'/>
                    <span>Wind 10 km/h</span>
                </div>
                <div className='break'>|</div>
                <div className='additional--block'>
                    <img src={hum} className='additional--img'/>
                    <span>Hum 54%</span>
                </div>
                <div className='break'>|</div>
                <div className='additional--block' >
                    <img src={rain} className='additional--img'/>
                    <span>Rain 0.2%</span>
                </div>
            </div>
            <div className='cardsholder'>
            {getCards()}
            </div>
        </div>
    );
};

export default MainLeft;