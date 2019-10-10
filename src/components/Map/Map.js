import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapService from '../../services/MapService';
import { Marker } from 'react-native-maps';

import NavigationService from '../../services/NavigationService';

const marker = MapService.getLocations("Gliwice")[0];
//console.log('bip', marker);
const marker2 = {
    coordinates: {
        latitude: 50.2987500, longitude: 18.6765800,
    }
}

const marker3 = {
    coordinates: {
        latitude: 50.2976100, longitude: 18.6765800,
    }
}

export default class Map extends React.Component{
    constructor(props) {
        super(props);
        this.markers = MapService.getLocations(props.navigation.state.params.city);
        this.state = {
            markers: this.markers,
            place: this.getStartingMapCoordinates(),
        }
    }

    findPlaceById(id) {
        for(var i = 0; i < this.markers.length; i++) {
            if(this.markers[i].key === id)
                return this.markers[i];
        }
    }

    getStartingMapCoordinates() {
        if(this.props.navigation.state.params.placeId === undefined)
            return MapService.getCityByName(this.props.navigation.state.params.city);
        else
            return this.findPlaceById(this.props.navigation.state.params.placeId)
    }
    //console.log('bip', props)
    //console.log('bip', props.navigation.state.params.city)
    render() {//{ latitude: this.state.place.latitude, longitude: this.state.place.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }
        return (
            <MapView style={{ flex: 1 }} region={this.state.place.coordinates}
                //onLayout={this.onMapLayout}
                //annotations={MapService.getLocations('Gliwice')}
                showsUserLocation={true}
            >
                {this.state.markers.map((marker) => (
                    <MapView.Marker
                        coordinate={marker.coordinates}
                        title={marker.title}
                        description={marker.description}
                        key={marker.key}
                        //onPress={() => props.navigation.navigate('Description', { param: marker })}
                        onCalloutPress={() => this.props.navigation.navigate('Description', { param: marker })}
                    >
                    </MapView.Marker>
                ))}
            </MapView>
        )
    }

}
//<Text>{marker.title}</Text>