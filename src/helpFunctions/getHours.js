export const getHours = (date) => {
    const day = new Date(date)
    const hours = day.getHours()
    return `${hours}:00`
}