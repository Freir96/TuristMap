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
/*
export default class Map extends React.Component {
    constructor() {
        super()
        this.state = {
            text: '',
            value: 'City',
            isMapReady: false,
            markers: []
        }

    }

    componentDidMount() {
        this.setState({ markers: MapService.getLocations('Gliwice') })
    }

    onMapLayout = () => {
        this.setState({ isMapReady: true });
    }

    render() {
        return (
            <View style={styles.container}>

                <MapView style={{ flex: 1 }} region={{ latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
                    //onLayout={this.onMapLayout}
                    //annotations={MapService.getLocations('Gliwice')}
                    showsUserLocation={true}
                />
                   
            </View>
                )
            }
}*/
const marker = MapService.getLocations("Gliwice")[0];
console.log('bip', marker);
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
if (marker.coordinates === marker3.coordinates)
    console.log('bip ===');
else
    console.log('bip !==', marker.coordinates, marker3.coordinates);
export default function Map(props) {
    return (
        <MapView style={{ flex: 1 }} region={{ latitude: 50.2976100, longitude: 18.6765800, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
            //onLayout={this.onMapLayout}
            //annotations={MapService.getLocations('Gliwice')}
            showsUserLocation={true}
        >
            {MapService.getLocations('Gliwice').map((marker) => (
                <MapView.Marker
                    coordinate={marker.coordinates}
                    title={marker.title}
                    description={marker.description}
                    key={marker.key}
                    //onPress={() => props.navigation.navigate('Description', { param: marker })}
                    onCalloutPress={() => props.navigation.navigate('Description', { param: marker })}
                >
                    <Text>{marker.title}</Text>
                </MapView.Marker>
            ))}
        </MapView>
    )
}