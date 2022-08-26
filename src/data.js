import splitIntoDays from "./splitIntoDays";
import fetch from "unfetch";




const getList = (raw) => {
    const { list } = raw
    const lists = splitIntoDays(list)
    return lists
}

export default async function detData(setter,searchValue) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=6e93b3d15872f914c6929fed9ea71e9a`
    const response = await fetch(url)
    const data = await response.json()
    setter(getList(data))
    console.log('fetched')
}
