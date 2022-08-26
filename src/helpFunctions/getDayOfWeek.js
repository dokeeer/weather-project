export const getDayOfWeek = (day) => {
    switch(day){
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}

const getDayMonth = (month) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug','Sep', 'Oct','Nov', 'Dec']
    return months[month]
}

const getDayNum = (day) => {
    if (day === 11) return '11th'
    if (day === 12) return '12th'
    if (day === 13) return '13th'
    const lastnum = day % 10
    switch (lastnum) {
        case 1:
            return (`${day}st`)
        case 2:
            return (`${day}nd`)
        case 3:
            return (`${day}rd`)
        default:
            return (`${day}th`)
    }
}

export const getDayDate = (date) => {
    const day = new Date(date)
    const dayDate=(`${getDayNum(day.getDate())} ${getDayMonth(day.getMonth())} ${day.getFullYear()}`)
    return dayDate
}