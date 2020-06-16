import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Text,
    Image,
} from 'react-native';

import { SearchBar } from 'react-native-elements';

import I18n from '../../i18n/i18n';
import colors from '../../styles/colors';
import Element from './Element';

import PlaceService from '../../services/PlaceService';
//import { getRegions } from '../../services/WeatherService';
import DescriptionService from '../../services/DescriptionService';
import ShoppingService from '../../services/ShoppingService'

import FeatherIcon from 'react-native-vector-icons/Feather';

export default class PlacesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            places: [],
        }
    }

    async componentDidMount() {
        let data = await getDataFun[this.props.type]()
        this.setState({ places: data })
        console.log(this.props.type, data)
    }

    getPlaces() {
        //console.log("list1", this.state.places.length)
        return this.state.places.map(
            (place, i) => {
                console.log("list", place)
                if (place.name.toLowerCase().includes(this.state.searchText.toLowerCase())) {
                    return (<Element title={place.name}
                        type={this.props.type}
                        placeprops={place}
                        subtitle={place.description} key={i}
                        navigation={this.props.navfunction}
                        hide={() => this.props.hide()}
                        navfunction={this.props.navfunction} />)
                }
            }
        )
    }

    render() {
        return (
            <ScrollView style={{ alignSelf: 'center' }}>
                <View style={{ paddingBottom: 100 }}>
                    <Image
                        //source={require('../../assets/tmp/restaurant.jpg')}
                        source={icons[this.props.type]}
                        style={{ alignSelf: 'center', width: 80, height: 55 }}
                    />
                    <Text style={{ color: colors.white, fontSize: 22, alignSelf: 'center' }}>
                        {I18n.t(this.props.type).toUpperCase()}
                    </Text>
                    {/*<SearchBar ref={search => this.search = search}
                        round //To make the searchbar corner round (default square)
                        searchIcon={{ size: 24 }}
                        style={{ backgroundColor: colors.lightgray, width: 200 }}
                        //lightTheme={true}
                        inputStyle={{ backgroundColor: colors.lightGrey }}
                        leftIconContainerStyle={{ backgroundColor: colors.lightGrey }}
                        rightIconContainerStyle={{ backgroundColor: colors.lightGrey }}
                        placeholder={I18n.t("search") + "..."}
                        containerStyle={{
                            backgroundColor: colors.darkPrimary,
                            borderBottomColor: 'transparent',
                            borderTopColor: 'transparent'
                        }}
                    />*/}
                    <View style={{
                        backgroundColor: colors.lightGrey, borderRadius: 40,
                        width: 260, borderWidth: 1, borderColor: colors.darkish2,
                    }}>
                        <TextInput
                            style={{
                                backgroundColor: colors.lightgray, width: 200,
                                alignSelf: 'center', height: 40,
                            }}
                            ref={search => this.search = search} placeholder={I18n.t("search") + "..."}
                            onChangeText={(text) => { this.setState({ searchText: text }) }}
                        />
                        <View style={{
                            position: 'absolute', /*top: 10, bottom: 0,*/ right: 15, //flex: 1,
                            //borderLeftColor: colors.darkish2, borderLeftWidth: 1,
                            flexDirection: 'row',
                        }}>
                            <Text style={{
                                color: colors.darkish2, fontSize: 30,
                                alignSelf: 'center', textAlignVertical: 'center',
                            }}>|</Text>
                            <View style={{ marginTop: 10 }}>
                                <FeatherIcon name="search" size={20} color={colors.darkish2} />
                            </View>
                        </View>
                    </View>
                    {/*
                        tmp.map(i => <Element title={title}
                            subtitle={subtitle} key={i}
                            navigation={this.props.navfunction}
                            hide={() => this.props.hide()}
                            navfunction={this.props.navfunction} />)
                        */}
                    {this.getPlaces()}
                </View>
            </ScrollView>
        )
    }
}
const title = "Włoszczyzna";
const subtitle = "Kuchnia włoska charakteryzuje się korzystaniem z dużej " +
    "ilości warzyw i przypraw takich jak oregano, bazylia, " +
    "pieprz, estragon, tymianek, rozmaryn";
const tmp = [0, 1, 2, 3, 4, 5];
var icons = []
icons['restaurants'] = require('../../assets/Ikony_menu/restaurant.png')
icons['weather'] = require('../../assets/weather/weather.png')
icons['atraction'] = require('../../assets/icons/atraction.png')
icons['place'] = require('../../assets/icons/atraction.png')

var getDataFun = []

getDataFun['atraction'] = () => { return DescriptionService.getAtractions() }
getDataFun['place'] = () => { return DescriptionService.getPlaces() }
getDataFun['restaurant'] = () => { return DescriptionService.getRestaurants() }
getDataFun['shopping'] = (id) => { return ShoppingService.getProductsListById(id) }
getDataFun['weather'] = () => {
    return [
        {
            name: "Ajuy",
            id: 1,
            lat: 28.399612,
            long: -14.155519,
        },
        {
            name: "Betancuria",
            id: 3,
            lat: 28.424862,
            long: -14.056896,
        },
        {
            name: "Caleta de Fuste",
            id: 4,
            lat: 28.397863,
            long: -13.866654,
        },
        {
            name: "Corralejo",
            id: 5,
            lat: 28.728423,
            long: -13.867026,
        },
        {
            name: "Costa Calma",
            id: 6,
            lat: 28.160185,
            long: -14.229059,
        },
        /*{
            name: "Vega de Rio Palmas",
            id: 26,//28.075409, -14.304499
            latitude: 28.075409,
            longitude: -14.304499,
        },*/
        {
            name: "Esquinzo",
            id: 17,
            lat: 28.075351,
            long: -14.304116,
        },
        {
            name: "Gran Tarajal",
            id: 8,
            lat: 28.214121,
            long: -14.020738,
        },
        {
            name: "La Pared",
            id: 12,
            lat: 28.212178,
            long: -14.215098,
        },
        {
            name: "Morro Jable",
            id: 16,
            lat: 28.056493,
            long: -14.353359,
        },
        {
            name: "Pajara",
            id: 18,
            lat: 28.350527,
            long: -14.108015,
        },
        {
            name: "Puerto del Rosario",
            id: 21,
            lat: 28.500728,
            long: -13.862255,
        },
        {
            name: "Tuineje",
            id: 24,
            lat: 28.326499,
            long: -14.047861,
        },
        {
            name: "Vega de Rio Palmas",
            id: 26,
            lat: 28.394085,
            long: -14.083592,
        },
    ]
}

