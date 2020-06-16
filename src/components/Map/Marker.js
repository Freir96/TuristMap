import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Image,
    Text,
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

export default class Marker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocus: false,
        }
        console.log("bip", props.coordinate)
    }

    focus() {
        this.setState({ isFocus: true })
    }

    zoomin() {

    }

    render() {
        return (
            <MapView.Marker
                coordinate={this.props.coordinates}
                //title={this.props.marker.name}
                //description={this.props.marker.description}
                //key={this.props.marker.key}//--
                //image={require('../../assets/markers/restaurant.JPG')}
                //image={require("./markers/restaurant.jpg")}
                //onPress={() => props.navigation.navigate('Description', { param: marker })}
                onCalloutPress={() => this.props.onCalloutPress(this.props.marker)} // this.props.navigation.navigate('Description', { place: marker })
            >
            </MapView.Marker>
        );
    }
}