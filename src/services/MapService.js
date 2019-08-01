
// type LatLng {
//     latitude: Number,
//     longitude: Number,
// }

var locations = []

locations['Gliwice'] = [
    {
        title: 'Place1',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800,
        },
        key: 1,
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'Bob',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2776100, longitude: 18.6725800,
        },
        key: 2,
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'Bar',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.3977100, longitude: 18.9164800,
        },
        key: 3,
        //color: 'YOUR_COLOR_VALUE'
    },
]

locations['Paris'] = [
    {
        title: 'place1',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800,
        },
        identifier: '1'
    }
]


locations['London'] = [
    {
        title: 'FINISH',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800,
        },
        key: 'YOUR_KEY_VALUE',
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'FINISH',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800,
        },
        key: 'YOUR_KEY_VALUE',
        //color: 'YOUR_COLOR_VALUE'
    },
    {
        title: 'FINISH',
        description: 'You have found me!',
        coordinates: {
            latitude: 50.2976100, longitude: 18.6765800,
        },
        key: 'YOUR_KEY_VALUE',
        //color: 'YOUR_COLOR_VALUE'
    },
]

var description = []

description[0] = {
    name: 'bip'
}

description[1] = {
    name: 'bip'
}

export default class MapService {
    static getCityList() {
        return ['London', 'Paris', 'Gliwice']
    }
    static getSugestionsCitys() {
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
    
}
