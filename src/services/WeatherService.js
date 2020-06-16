const apikey = '32be03075058ea3b691e5374347ae7bb'//'b6907d289e10d714a6e88b30761fae22'
var url = 'https://samples.openweathermap.org/data/2.5/weather?lat=28.33333&lon=-14.01667&appid=' + apikey
var urlForecast = 'https://samples.openweathermap.org/data/2.5/forecast?lat=28.33333&lon=-14.01667&appid=' + apikey
var day5forecast = 'https://openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid='

var tmp = 'http://api.openweathermap.org/data/2.5/forecast?lat=0&lon=0&appid=32be03075058ea3b691e5374347ae7bb'
var tmp2 = 'http://api.openweathermap.org/data/2.5/forecast?lat=28.349414&lon=-14.046311&appid=32be03075058ea3b691e5374347ae7bb'

async function getWeather() {
    const request = new Request(url, {
        method: 'get'
    })
    const response = await fetchWithAuth(request)
    return response;
}

async function getForecast() {
    try {
        const request = new Request(urlForecast, {
            method: 'get'
        })
        const response = await fetch(request)
            .then(value => {
                return value;
            })
            .catch(function (error) {
                console.error(error);
            });
    }
    catch{

    }
}

/*async function getPlaceForecast(lat, long) {
    //var response;
    var day5forecast = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=' + apikey;
    try {
        const request = new Request(tmp2, {
            method: 'get'
        })
        let response = await fetch(request)
            .then(value => {
                console.log("than", value);
                return value//.json();
            })
            .catch(function (error) {
                console.error(error);
            });
    }
    catch{

    }
    //return response;
}*/

async function getPlaceForecast(lat, long) {
    const day5forecast = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&appid=' + apikey;
    //const forecast16 = 'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + long + '&appid=' + apikey;
    //const forecast16 = 'https://api.openweathermap.org/data/2.5/forecast/daily?lat=' + lat + '&lon=' + long + '&cnt=10&appid=' + apikey

    const request = new Request(day5forecast, {
        method: 'get'
    })
    let response = await fetch(request);
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    return response.json();
}

function getRegions() {
    return [
        {
            name: "Fuerteventura " + I18n.t("north"),
            lat: 28.732278,
            long: -13.894762,
        },
        {
            name: "Fuerteventura " + I18n.t("center"),
            lat: 28.349414,
            long: -14.046311,
        },
        {
            name: "Fuerteventura " + I18n.t("south"),
            lat: 28.065182,
            long: -14.372751,
        },
    ]
}

export default { getWeather, getForecast, getRegions, getPlaceForecast };