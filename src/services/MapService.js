
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

cityCoordinetes['Gliwice'] = {latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922 * 2, longitudeDelta: 0.0421 * 2}

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
        //console.log('bip4', id)
        //console.log('bip44', description[id])
        return description[id];
    }

    static getCityByName(name) {
        return cityCoordinetes[name];
    }
    
}
