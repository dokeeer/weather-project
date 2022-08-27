export const getHours = (date) => {
    const day = new Date(date.replace(' ', 'T'))
    const hours = day.getHours() < 10? `0${day.getHours()}` : day.getHours()
    return `${hours}:00`
}