
// type LatLng {
//     latitude: Number,
//     longitude: Number,
// }

var locations = []

locations['Gliwice'] = [
    {
        title: 'Hilton',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
        key: 0,
        type: 'hotel',
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'KFC',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2776100, longitude: 18.6725800, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
        key: 1,
        type: 'restaurant',
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'KFC',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.3977100, longitude: 18.9164800, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
        key: 2,
        type: 'restaurant',
        //color: 'YOUR_COLOR_VALUE'
    },
]

var places = require('../assets/map_data/places.json');

var cities = [
    {
        title: 'Fuerteventura',
        description: 'Go tu city view',
        coordinates: {
            latitude: 28.33333, longitude: -14.01667, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
    },
    {
        title: 'Morro jable',
        description: 'Go tu city view',
        coordinates: {
            latitude: 28.051110, longitude: -14.351552, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
    },
]


locations['Paris'] = [
    {
        title: 'place1',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
        identifier: 0
    }
]


locations['London'] = [
    {
        title: 'FINISH',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
        key: 0,
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'FINISH',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
        key: 1,
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'FINISH',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421
        },
        key: 2,
        //color: 'YOUR_COLOR_VALUE'
    },
]

var description = []

description[0] = {
    name: 'Holton',
    description: 'A hotel. 5 stars.',
    type: 'hotel',
}

description[1] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

description[2] = {
    name: 'KFC',
    description: 'Chicken',
    type: 'restaurant',
}

var cityCoordinetes = [];

cityCoordinetes['Gliwice'] = { latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922 * 2, longitudeDelta: 0.0421 * 2 }

export default class MapService {
    static getPlacesBySegmentId(id) {
        return places.sections[id];
    }

    static getCityList() {
        return ['London', 'Paris', 'Gliwice']
    }

    static getSugestionscities() {
        return ['Gliwice'];
    }

    static getSugestionsPlaces() {
        //let location = locations['Gliwice']
        //return [location[1]];
        return locations['Gliwice']
    }

    static getLocations(cityName) {
        return locations[cityName]
    }

    static getDescriptionById(id) {
        return description[id];
    }

    static getCityByName(name) {
        return cityCoordinetes[name];
    }

    static getMainCoordinates() {
        return ({
            coordinates: {
                latitude: 28.33333, longitude: -14.01667, latitudeDelta: 0.0922, longitudeDelta: 0.0421
            }
        })

    }

    static getCities() {
        return cities;
    }

}
