import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Text,
} from 'react-native';

import I18n from '../../i18n/i18n';

import TextListSearch from '../TextListSearch';
import Element from '../TextListSearch/Element/Element';
import FavoriteService from '../../services/FavoriteService';
import PlaceService from '../../services/PlaceService';


export default class Places extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: [],
            isLoading: true,
        }
        //console.log('bip places')
    }

    async componentDidMount() {
        const cities = PlaceService.getCityList();
        var allPlaces = [];
        console.log('bip cities', cities)
        for (var i = 0; i < cities.length; i++) {
            let places = PlaceService.getPlacesFromCity(cities[i].name)//.map((place => {return {name: place, city: cities[i]}}))
            console.log('bip places', places)
            if (places !== undefined)
                for (var j = 0; j < places.length; j++) {
                    //console.log('bip places2', tmp[j])
                    if (places[j] !== undefined)
                        allPlaces.push({ title: places[j].name, city: cities[i].name, id: places[i].id})

                }

        }
        this.setState({ places: allPlaces });
        console.log('bip places3', this.state.places)
        this.setState({ isLoading: false })
    }

    render() {
        const { places, isLoading } = this.state
        console.log('bip99 places render', places)
        if (!isLoading)
            return (
                <View>
                    <ScrollView>
                        <TextListSearch
                            searchbar={true}
                            type={"place"}
                            multicity={true}
                            prefix={""}
                            places={places}
                            navfunction={(place) => { this.props.navigation.navigate('Description', { place: place }) }}
                        />
                    </ScrollView>
                    {/*<ScrollView>
                    {this.state.places.map((place) => <Element
                        place={place.name}
                        prefix={place.city}
                        key={place.city + place.name}
                        type={"place"} />)}
                    </ScrollView>*/}
                </View>
            )
        else
            return (
                <View>

                </View>
            )
    }
}