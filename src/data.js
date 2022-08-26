import splitIntoDays from "./splitIntoDays";




const getList = (raw) => {
    const { list } = raw
    const lists = splitIntoDays(list)
    return lists
}

export default async function detData(setter,searchValue) {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&appid=6e93b3d15872f914c6929fed9ea71e9a`);
    const data = await response.json();
    setter(getList(data))
}
