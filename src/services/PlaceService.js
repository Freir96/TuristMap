
//var cityList = [{name: "Gliwice", id: 1}, {name: "Londyn", id: 2}, {name: "Paris", id: 3}];
var cityList = [{name: "Fuerteventura", id: 1}, {name: "Morro jable", id: 2}];
var places = []

places[1] = {//28.701231, -13.919358
    id: 1,
    type: "place",
    name: "Calderon Hondo",
    latitude: 28.701231,
    longitude: -13.919358,
}
places[2] = {//28.682687, -13.850509
    id: 2,
    type: "place",
    name: "Dunas de Corralejo",
    latitude: 28.682687,
    longitude: -13.850509,
}
places[3] = {//28.096544, -14.275183
    id: 3,
    type: "place",
    name: "El Salmo",
    latitude: 28.096544,
    longitude: -14.275183,
}
places[4] = {//28.230220, -13.948573
    id: 4,
    type: "place_comertial",
    name: "Faro de Entallada",
    latitude: 28.230220,
    longitude: -13.948573,
}
places[5] = {//28.715541, -14.013674
    id: 5,
    type: "place_comertial",
    name: "Faro de Tostón",
    latitude: 28.715541,
    longitude: -14.013674,
}
places[6] = {//28.091313, -14.380966
    id: 6,
    type: "place",
    name: "Mirador de Cofete",
    latitude: 28.091313,
    longitude: -14.380966,
}
places[7] = {//28.379340, -14.094897
    id: 7,
    type: "place",
    name: "Mirador de Risco de Las Peñas",
    latitude: 28.379340,
    longitude: -14.094897,
}
places[8] = {//28.287988, -14.159871
    id: 8,
    type: "place",
    name: "Mirador de Sicasumbre",
    latitude: 28.287988,
    longitude: -14.159871,
}
places[9] = {//28.440887, -14.056447
    id: 9,
    type: "place",
    name: "Mirador Guise y Ayose",
    latitude: 28.440887,
    longitude: -14.056447,
}
places[10] = {//28.438534, -14.050107
    id: 10,
    type: "place",
    name: "Mirador Morro Velosa",
    latitude: 28.438534,
    longitude: -14.050107,
}
places[11] = {//28.261301, -14.164036
    id: 11,
    type: "place",
    name: "Montaña Cardon",
    latitude: 28.261301,
    longitude: -14.164036,
}
places[12] = {//
    id: 12,
    type: "place",
    name: "Pico de la Zarza",
    latitude: 28.101970,
    longitude: -14.355424,
}
places[13] = {//28.694383, -14.016191
    id: 13,
    type: "place",
    name: "Playa la Concha",
    latitude: 28.694383,
    longitude: -14.016191,
}
places[14] = {//28.634881, -14.026733
    id: 14,
    type: "place",
    name: "Playa Esquinzo",
    latitude: 28.634881,
    longitude: -14.026733,
}
places[15] = {//28.109841, -14.265239
    id: 15,
    type: "place",
    name: "Playa Sotavento",
    latitude: 28.109841,
    longitude: -14.265239,
}
places[16] = {//28.113234, -14.379930
    id: 16,
    type: "place",
    name: "Playa de Cofete",
    latitude: 28.113234,
    longitude: -14.379930,
}
places[17] = {//28.101840, -14.375100
    id: 17,
    type: "place_comertial",
    name: "Villa Winter",
    latitude: 28.101840,
    longitude: -14.375100,
}
places[18] = {
    id: 18,
    type: "restaurant",
    name: "Algo Mas",//28.378416, -13.876455
    latitude: 28.378416,
    longitude: -13.876455,
}
places[19] = {
    id: 18,
    type: "restaurant",
    name: "Mahoh",//28.620906, -13.910579
    latitude: 28.620906,
    longitude: -13.910579,
}
places[20] = {
    id: 18,
    type: "restaurant",
    name: "Piccola Italia",//28.052385, -14.352891
    latitude: 28.052385,
    longitude: -14.352891,
}
/*places[18] = {//
    id: 18,
    name: "",
    latitude: 1,
    longitude: 8,
}
places[19] = {//
    id: 19,
    name: "",
    latitude: 1,
    longitude: 8,
}
places[2] = {//
    id: 2,
    name: "",
    latitude: 1,
    longitude: 8,
}
places[2] = {//
    id: 2,
    name: "",
    latitude: 1,
    longitude: 8,
}*/

export default class PlaceService {
    static getCityList() {
        return cityList;
    }

    static getPlaces() {
        return places;
    }

    static getPlaceById(id) {
        return places[id];
    }

    static getRestaurants() {
        var output = []
        for(var i = 0; i < places.length; i++) {
            if(places[i].type === "restaurant") {
                console.log(places[i])
                output.push(places[i])
            }
        }
        return output;
    }

    static getAtractions() {
        var output = []
        for(var i = 0; i < places.length; i++) {
            if(places[i].type === "place" || places[i].type === "place_comertial") {
                output.push(places[i])
            }
        }
        return output;
    }

    static getPlacesFromCity(city, place) {
        if (place !== undefined) {
            var res = [];
            const allplaces = places[city];
            for (var i = 0; i < places[city].length; i++) {
                console.log("bip...", allplaces[i].type, place)
                if (allplaces[i].type === place)
                    res.push(allplaces[i]);
            }
            return res;
        }
        return places[city];
    }
}