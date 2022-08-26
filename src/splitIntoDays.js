import {getDayDate, getDayOfWeek} from "./helpFunctions/getDayOfWeek";


const convertToCelsium = (kelvin) => {
    return Math.round(kelvin - 273)
}

const splitIntoDays = (list) => {
    const startDate = new Date((list[0].dt_txt))
    let day = startDate.getDay();
    let array = []
    let obj = []
    let date
    let counter = 1
    let averageTemp = 0
    let averageRain = 0
    let averageHum = 0
    for (let i = 0; i < 40; i++) {
        date = new Date((list[i].dt_txt))
        if (day !== date.getDay()) {
            averageTemp = convertToCelsium(averageTemp/array.length)
            averageHum = Math.round(averageHum/array.length)
            averageRain = Math.round(averageRain/array.length)
            obj = [
                ...obj,
                {
                    hourlyData: [...array],
                    dayOfWeek: getDayOfWeek(day),
                    dayDate: getDayDate(array[0].dt_txt),
                    averageTemp,
                    averageHum,
                    averageRain
                }
            ]
            averageRain = 0
            averageHum = 0
            averageTemp = 0
            counter++
            array = []
        }
        else {

        }
        averageHum = averageHum + list[i].main.humidity
        averageTemp = averageTemp + list[i].main.temp
        averageRain = averageRain + list[i].pop*100
        day = date.getDay()
        array.push(list[i])
    }
    return obj
}

export default splitIntoDays