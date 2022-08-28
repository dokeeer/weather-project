import React from 'react';
import cloudy from '../images/weather_svg/cloudy.svg'
import rainy from '../images/weather_svg/overcast-rain.svg'
import snow from '../images/weather_svg/snow.svg'
import sunny from '../images/weather_svg/clear-day.svg'
import thunderstorm from '../images/weather_svg/thunderstorms.svg'
import cloudyDay from '../images/weather_svg/partly-cloudy-day.svg'
import cloudyNight from '../images/weather_svg/partly-cloudy-night.svg'
import overcast from '../images/weather_svg/overcast.svg'
import extremeRainy from '../images/weather_svg/extreme-rain.svg'

const lightRains = ['light rain', 'moderate rain', 'freezing rain', 'light intensity shower rain']

const checkDay = (time) => {
    const myTime = time[0]+time[1]
    console.log(myTime)
    if (myTime >= 6 && myTime <= 18) return 'day'
    else return 'night'
}

const WeatherPicture = (props) => {
    const {currentWeather} = props
    const {currentTypeWeather} = props
    const time = checkDay(props.time)
    let curWeather;
    switch (currentWeather) {
        case 'Clouds':
            switch (currentTypeWeather) {
                case 'overcast clouds':
                    curWeather = overcast
                    break
                case 'broken clouds':
                    curWeather = cloudy
                    break
                default:
                    switch (time) {
                        case 'night':
                            curWeather = cloudyNight
                            break
                        case 'day':
                            curWeather = cloudyDay
                            break
                        break
                    }
                    break
            }
            break
        case 'Rain':
            if (lightRains.includes(currentTypeWeather))
            {
                curWeather = rainy
            }
            else {
                curWeather = extremeRainy
            }
            break
        case 'Snow':
            curWeather = snow
            break
        case 'Thunderstorm':
            curWeather = thunderstorm
            break
        default:
            curWeather = sunny
    }


    return (
        <iframe onClick={()=>console.log('aaa')} src={curWeather} className={props.class}/>
    );
};

export default WeatherPicture;