const getData = () =>
{
    const options = {
        method: 'GET',
        headers: {
            'X-Gismeteo-Token': '56b30cb255.3443075',
        }
    };

    fetch('https://api.gismeteo.net/v2/weather/current/4368/?lang=en', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

export default getData