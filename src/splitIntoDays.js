import {getDayDate, getDayOfWeek} from "./helpFunctions/getDayOfWeek";
import { getHours } from './helpFunctions/getHours'
import {getMaxEntry} from "./helpFunctions/getMaxEntry";

const convertToCelsium = (kelvin) => {
    return Math.round(kelvin - 273)
}

const splitIntoDays = (list) => {
    const startDate =  new Date((list[0].dt_txt.replace(' ', 'T')))
    let day = startDate.getDay();
    let array = []
    let obj = []
    let date
    let counter = 1
    let averageWeather = []
    let averageTypeWeather = []
    let averageTemp = 0
    let averageRain = 0
    let averageHum = 0
    for (let i = 0; i < list.length; i++) {
        date = new Date((list[i].dt_txt.replace(' ', 'T')))
        if (day !== date.getDay()) {
            averageTemp = convertToCelsium(averageTemp/array.length)
            averageHum = Math.round(averageHum/array.length)
            averageRain = Math.round(averageRain/array.length)
            averageWeather = getMaxEntry(averageWeather)
            averageTypeWeather = getMaxEntry(averageTypeWeather)
            obj = [
                ...obj,
                {
                    hourlyData: [
                        ...array,
                    ],
                    dayOfWeek: getDayOfWeek(day),
                    dayDate: getDayDate(array[0].dt_txt.replace(' ', 'T')),
                    averageTemp,
                    averageHum,
                    averageRain,
                    averageWeather,
                    averageTypeWeather,
                }
            ]
            averageRain = 0
            averageHum = 0
            averageTemp = 0
            averageTypeWeather = []
            averageWeather = []
            counter++
            array = []
        }
        else {

        }
        averageWeather.push(list[i].weather[0].main)
        averageTypeWeather.push(list[i].weather[0].description)
        averageHum = averageHum + list[i].main.humidity
        averageTemp = averageTemp + list[i].main.temp
        averageRain = averageRain + list[i].pop*100
        day = date.getDay()
        array.push({
            ...list[i],
            hours: getHours(list[i].dt_txt)
        })
    }
    return obj
}

export default splitIntoDays