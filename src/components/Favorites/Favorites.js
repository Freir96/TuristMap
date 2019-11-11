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

import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

export default class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
        }
    }

    async componentDidMount() {
        var val = await FavoriteService.getFavoritecities()
        this.setState({ cities: val })

    }

    getfavorites(list, type) {
        var arr = [];
        for (var i = 0; i < list.length; i++) {
            arr.push(<Element name={list[i]}
                key={list[i]}
                navfunction={(name) => { this.props.navigation.navigate('CityView', { name: name }) }}
                type={type}
            />)
        }
        return arr;
    }

    getFavPlaces() {
        var cities = PlaceService.getCityList()
        var places = []
        for (var i = 0; i < cities.length; i++) {
            let places2 = PlaceService.getPlacesFromCity(cities[i].name)
            console.log("bip fav list", places2)
            if (places2 !== undefined) {
                places = places.concat(places2.map(
                    place => (
                        <Element
                            place={place.name} 
                            key={cities[i].name + place.name}
                            id={place.id}
                            navfunction={(place) => { this.props.navigation.navigate('Description', { place: place }) }}
                            type={"place"}
                            onlyFavorite={true}
                            prefix={cities[i].name}
                        />
                    )
                ))
            }
        }
        console.log("bip fav", places.length)
        return places;
        /*var places = cities.map(
            (city) => PlaceService.getPlacesFromCity(city).map(
                (place) =>{
                    return (
                    <Element
                        place={place} key={city + place} type={"place"} onlyFavorite={true}
                    />
                )
                }
            )
        )*/
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View style={styles.headline}>
                        <Text style={styles.title}>{I18n.t("cities")}</Text>
                    </View>
                    {this.state.cities.map((place) => <Element
                        place={place}
                        key={place}
                        type={"city"}
                        navfunction={(name) => { this.props.navigation.navigate('CityView', { name: name }) }}
                    />)}
                    {
                        //this.getfavorites(this.state.places, "city")
                    }
                    {/*true &&//this.state.places.length > 0 &&
                    <TextListSearch
                        type={"city"}
                        searchbar={false}
                        places={this.state.places}
                        navfunction={(name) => { this.props.navigation.navigate('CityView', { name: name }) }}
                    />
                    */}
                    <View style={styles.headline}>
                        <Text style={styles.title}>{I18n.t("places")}</Text>
                    </View>
                    {
                        this.getFavPlaces()
                    }
                </ScrollView>
                <Text>{this.getFavPlaces().length}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
    headline: {
        backgroundColor: Colors.lightgray,
        width: "100%",
    },
});