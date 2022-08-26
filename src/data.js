
const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Джанкой&appid=6e93b3d15872f914c6929fed9ea71e9a';



const getList = (raw) => {
    const { list } = raw
    return list
}

export default async function detData(setter) {
    const response = await fetch(url);
    const data = await response.json();
    setter(getList(data))
}
