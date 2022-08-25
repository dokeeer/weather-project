const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Джанкой&appid=6e93b3d15872f914c6929fed9ea71e9a';
const options = {
    method: 'GET',
};
export default function getData(){
    fetch(url)
        .then(data => data.json())
        .then(data => {
            console.log(data);
        })
}