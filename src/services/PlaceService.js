
var cityList = [{name: "Gliwice", id: 1}, {name: "Londyn", id: 2}, {name: "Paris", id: 3}];

var places = []

places["Gliwice"] = [{name: "KFC", id: 1}, {name: "Airport", id: 2}, {name: "KFC2", id: 3}]
places["London"] = [{name: "KFC", id: 6}, {name: "Airport", id: 5}, {name: "KFC2", id: 4}]
places["Paris"] = [{name: "KFC", id: 7}, {name: "Airport", id: 8}, {name: "KFC2", id: 9}]

export default class PlaceService {
    static getCityList() {
        return cityList;
    }

    static getPlacesFromCity(city) {
        return places[city];
    }
}