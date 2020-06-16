import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Image,
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
import colors from '../../styles/colors';
import { getIcon } from '../../services/IconService';

export default class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            favs: [],
        }
    }

    async componentDidMount() {
        var val = await FavoriteService.getFavoritecities()
        this.setState({ cities: val })
        var favs = [];
        let data = await FavoriteService._retrieveData("Atraction");
        favs["Atraction"] = data;
        data = await FavoriteService._retrieveData("Restaurant");
        favs["Restaurant"] = data;
        data = await FavoriteService._retrieveData("Place");
        favs["Place"] = data;
        data = await FavoriteService._retrieveData("CityView");
        favs["CityView"] = data;
        this.setState({ favs: favs })
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
                            type={place.type}
                            onlyFavorite={true}
                            prefix={cities[i].name}
                        />
                    )
                ))
            }
        }
        console.log("bip fav", places.length)
        return places;
    }

    getTestPlace(type) {
        return <View>
            <Element
                place="test"
                type={type}
                subText={"Lorem ipsum dolor sit amet"}
            />
            <Element
                place="test2"
                type={type}
                subText={"Lorem ipsum dolor sit amet"}
            />
        </View>
    }

    getPlacesOfType(type) {
        let data = this.state.favs[type]//await FavoriteService._retrieveData(type);
        /*return favPlaces.map((item) => {
            placeData = item.split(".")
            return (
                <Element
                    place={placeData[0]}
                    subText={placeData[1]}
                    type={type}
                />
            )
        })*/console.log("fav", type, data)
        if (typeof data == "string") {
            var favPlaces = data.split(";")
            console.log("fav2", favPlaces)
            var output = []
            for (var i = 0; i < favPlaces.length; i++) {
                var placeData = favPlaces[i].split(".")
                output.push(
                    <Element
                        key={placeData[0]}
                        place={placeData[0]}
                        name={placeData[0]}
                        id={placeData[1]}
                        type={type}
                    />
                )
            }
            console.log("fav3", output.length)
            return output
            //return (<Text>bip</Text>);
        }
        else {
            console.log("bip else", type)
            return (<Text>{I18n.t("emptyList").toUpperCase()}</Text>)
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: colors.darkPrimary, flex: 1 }}>
                <ScrollView style={{ backgroundColor: colors.darkPrimary }}>
                    <View style={{
                        backgroundColor: colors.primaryLight,
                        width: '100%', borderTopEndRadius: 30, borderTopLeftRadius: 30,
                    }}>
                        <Text style={{
                            fontFamily: 'OpenSans-Bold', fontSize: 20,
                            marginTop: 30, marginBottom: 40,
                            color: colors.white, alignSelf: 'center', textAlign: 'center'
                        }}>
                            {I18n.t('favorites').toUpperCase()}
                        </Text>
                    </View>
                    {/*<View style={{ backgroundColor: colors.primaryLight }}>
                        <View style={{
                            backgroundColor: colors.white,
                            borderTopEndRadius: 30, borderTopLeftRadius: 30,
                            height: 70,
                        }}></View>
                    </View>*/}
                    <View style={{
                        width: 0, height: 0,
                        backgroundColor: 'transparent',
                        borderStyle: 'solid',
                        borderLeftWidth: 25, borderRightWidth: 25,
                        borderBottomWidth: 25,
                        borderLeftColor: 'transparent', borderRightColor: 'transparent',
                        borderBottomColor: colors.primaryLight,
                        marginLeft: 25,
                        marginBottom: 10,
                        transform: [
                            { rotate: '180deg' }
                        ]
                    }}
                    >
                    </View>
                    <View style={{ width: '90%', alignSelf: 'center' }}>
                        <View style={styles.headline}>
                            <Text style={styles.title}>{I18n.t("atractions")}</Text>
                            <Image source={getIcon('atraction_icon')} />
                        </View>
                        {this.getPlacesOfType("Atraction")}
                        <View style={styles.headline}>
                            <Text style={styles.title}>{I18n.t("restaurants")}</Text>
                            <Image source={getIcon('restaurant_icon')} />
                        </View>
                        <View style={styles.headline}>
                            <Text style={styles.title}>{I18n.t("places")}</Text>
                            <Image source={getIcon('place_icon')} />
                        </View>
                        {this.getPlacesOfType("Place")}
                        <View style={styles.headline}>
                            <Text style={styles.title}>{I18n.t("cities")}</Text>
                            <Image source={getIcon('place_icon')} />
                        </View>
                        {this.getPlacesOfType("CityView")}
                    </View>
                </ScrollView>
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
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
        color: colors.darkish2,
        marginBottom: 5,
        width: 150,
    },
    activeTitle: {
        color: 'red',
    },
    headline: {
        //backgroundColor: Colors.lightgray,
        flexDirection: 'row',
        borderBottomColor: colors.darkish2,
        borderBottomWidth: 1,
        width: "100%",
        marginTop: 15,
    },
    headlineText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 18,
    },
});