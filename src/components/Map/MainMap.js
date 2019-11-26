import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Image,
    Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import MaterialCommunityIcons from 'react-native-vector-icons';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapService from '../../services/MapService';
import { Marker } from 'react-native-maps';

import NavigationService from '../../services/NavigationService';

//const marker = require('../../assets/markers/city.JPG')
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

export default class MainMap extends React.Component {
    constructor(props) {
        super(props);
        this.markers = MapService.getCities();//getLocations(props.navigation.state.params.city);
        this.state = {
            markers: [],
            isFocused: false,
            place: this.getStartingMapCoordinates(),
            cities: this.markers,
            segments: [0],
            currentSegment: 0,
            zoom: 0,
            region: {
                latitude: 28.33333, longitude: -14.01667, latitudeDelta: 1.0922, longitudeDelta: 0.0421
            },
        }
        this.region = {
            latitude: 28.33333, longitude: -14.01667, latitudeDelta: 1.7922, longitudeDelta: 0.0421
        }
    }

    componentDidMount() {
        const newplaces = MapService.getPlacesBySegmentId(this.state.currentSegment);
        console.log("bip mark", newplaces);
        this.setState({ markers: this.state.markers.concat(newplaces) })
        console.log("bip mark2", this.state.markers.concat(newplaces));

    }

    async updateMarkers(region) {
        console.log("bip map", region);
        var newplaces = [];
        if (this.state.segments.indexOf(this.state.currentSegment) === -1) {
            newplaces = MapService.getPlacesBySegmentId(this.state.currentSegment);
            this.setState({ markers: this.state.markers + newplaces })
        }
        //this.setState({ zoom: region.latitudeDelta })
        this.setState({ region: region })
    }

    findPlaceById(id) {
        for (var i = 0; i < this.markers.length; i++) {
            if (this.markers[i].key === id)
                return this.markers[i];
        }
    }

    changeFocus() {
        this.setState({isFocused: !this.state.isFocused})
    }

    zoomIn() {
        console.log('bip zoom')
        var newRegion = this.state.region;
        const zoom = 10
        newRegion.latitudeDelta = newRegion.latitudeDelta / zoom;
        newRegion.longitudeDelta = newRegion.longitudeDelta / zoom;
        //console.log('bip zoom2', zoom, newRegion.latitudeDelta)
        //this.setState({region: newRegion});
        this._map.animateToRegion(newRegion, 100);
    }

    getStartingMapCoordinates() {
        //if (this.props.navigation.state.params.placeId === undefined)
        //return MapService.getCityByName(this.props.navigation.state.params.city);
        return MapService.getMainCoordinates();
        //else
        //return this.findPlaceById(this.props.navigation.state.params.placeId)
    }

    getMarkers() {
        if (this.state.region.latitudeDelta < 0.2) {
            return (
                this.state.markers.map((marker) => (
                    <MapView.Marker
                        coordinate={marker.coordinates}
                        title={marker.name}
                        description={marker.description}
                        key={marker.key}
                        //image={require('../../assets/markers/restaurant.JPG')}
                        //image={require("./markers/restaurant.jpg")}
                        //onPress={() => props.navigation.navigate('Description', { param: marker })}
                        onCalloutPress={() => this.props.navigation.navigate('Description', { place: marker })}
                    >
                    </MapView.Marker>
                ))
            )
        }
        else
            return (
                this.state.cities.map((marker) => (
                    <MapView.Marker
                        coordinate={marker.coordinates}
                        title={marker.title}
                        description={marker.description}
                        key={marker.key}
                        onPress={() => {
                            if(this.state.isFocused)
                                this.zoomIn();
                            else
                                this.setState({isFocused: true});
                        }}
                        //image={require('../../assets/markers/city.JPG')}
                        //onPress={() => props.navigation.navigate('Description', { param: marker })}
                        onCalloutPress={() => this.props.navigation.navigate('CityView', { param: marker.title })}
                    >
                    </MapView.Marker>
                ))
            )
    }

    getZoomRatio() {
        let { width, height } = Dimensions.get('window')
        const ASPECT_RATIO = width / height
        const LATITUDE_DELTA = 60 //Very high zoom level
        const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
    }

    render() {
        return (
            <MapView style={{ flex: 1 }}
                onRegionChangeComplete={(region) => this.updateMarkers(region)}
                initialRegion={this.region}
                ref={(c) => this._map = c}
                showsUserLocation={true}
            >
                {this.getMarkers()}
            </MapView>
        )
    }

}
/*
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class MainMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 20.993776,
            longitude: 105.811417,
            latitudeDelta: 0.021,
            longitudeDelta: 0.021
          }}
          style={StyleSheet.absoluteFillObject}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});*/