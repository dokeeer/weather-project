const splitIntoDays = (list) => {
    const startDate = new Date((list[0].dt_txt))
    let day = startDate.getDay();
    let array = []
    let obj = {}
    let date
    let counter = 1
    for (let i = 0; i < 40; i++) {
        date = new Date((list[i].dt_txt))
        if (day !== date.getDay()) {

            obj = {
                ...obj,
                [counter]: {
                    data: [...array],
                    dayOfWeek: day
                }
            }
            counter++
            array = []
            day = date.getDay()
            array.push(list[i])
        }
        else {
            day = date.getDay()
            array.push(list[i])
        }
    }
    return obj
}

export default splitIntoDays