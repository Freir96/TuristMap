import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import colors from '../../styles/colors';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import TextListSearch from '../TextListSearch';
import SearchableDropdown from 'react-native-searchable-dropdown';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapService from '../../services/MapService';
import PlaceService from '../../services/PlaceService';
import { Marker } from 'react-native-maps';
//import Button from '../common/Button';

import I18n from '../../i18n/i18n';

var radio_props = [
    { label: I18n.t('all'), value: 'all' },
    { label: I18n.t('restaurant'), value: 'restaurant' },
    { label: I18n.t('hotel'), value: 'hotel' },
    { label: I18n.t('entertainment'), value: 'entertainment' },
];

export default class CityView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            value: 'all',
            isMapReady: false,
            markers: [],
            placesList: PlaceService.getPlacesFromCity(props.navigation.state.params.place.name),
            //placesList: MapService.getLocations(props.navigation.state.params.name),
        }
        this.placesList = PlaceService.getPlacesFromCity(props.navigation.state.params.place.name);

    }

    static navigationOptions = ({ navigation }) => {
        let title = <Text style={{ fontSize: 20, color: colors.darkGrey }}>
            {"tmp"/*navigation.getParam('place').name*/}
        </Text>
        //let currentProfile = navigation.getParam('profile')

        return {
            headerTitle: title,
            headerStyle: {
                backgroundColor: colors.white
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.darkGrey,
            },
            headerTintColor: colors.darkGrey
        }
    }

    /*getSugestionsPlaces() {
        var options = [];
        const sugestions = MapService.getSugestionsPlaces();
        for (var i = 0; i < sugestions.length; i++) {
            //console.log('bip2', sugestions[i])
            options.push(
                <Button
                    key={i}
                    style={{ margin: 5 }}
                    onPress={() => this.props.navigation.navigate('Description', { param: sugestions[i], city: props.navigation.state.params.name })}
                    title={sugestions[i].title}>
                </Button>);
        }
        return options;
    }*/

    /*getMatchingPlaces(substring) {
        var matchingPlaces = [];
        for (var i = 0; i < this.placesList.length; i++) {
            if (this.placesList[i].title.includes(substring))
                matchingPlaces.push({ key: i, name: this.placesList[i].title, });
        }
        //this.setState({cityList: matchingcities});
        return matchingPlaces;
    }*/

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: this.state.text,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1
                }}
                >
                    {/*
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={false}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => { this.setState({ value: value }) }}
                    />
                    <SearchableDropdown
                        onItemSelect={(item) => {
                            //console.log('bip', item)
                            this.props.navigation.navigate('Description', {param: item, name: item.name, key: item.key, city: this.props.navigation.state.params.name})// { name: item.name, item: item, key: item.key, city: this.props.navigation.state.params.name }
                            //this.props.navigation.navigate('CityView', { name: item })
                            //const items = this.state.selectedItems;
                            //items.push(item)
                            //this.setState({ selectedItems: items });
                        }}
                        containerStyle={{ padding: 5 }}
                        onRemoveItem={(item, index) => {
                            //const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
                            //this.setState({ selectedItems: items });
                        }}
                        itemStyle={{
                            padding: 10,
                            marginTop: 2,
                            backgroundColor: '#ddd',
                            borderColor: '#bbb',
                            borderWidth: 1,
                            borderRadius: 5,
                        }}
                        itemTextStyle={{ color: '#222' }}
                        itemsContainerStyle={{ maxHeight: 140 }}
                        items={this.getMatchingPlaces(this.state.text)}
                        //defaultIndex={2}
                        resetValue={false}
                        textInputProps={
                            {
                                placeholder: I18n.t('findCity'),
                                underlineColorAndroid: "transparent",
                                style: {
                                    padding: 12,
                                    borderWidth: 1,
                                    borderColor: '#ccc',
                                    borderRadius: 5,
                                },
                                onTextChange: text => this.setState({ text: text })//this.getMatchingcities(text)
                            }
                        }
                        listProps={
                            {
                                nestedScrollEnabled: true,
                            }
                        }
                    />*/}
                </View>
                <TextListSearch
                    searchbar={true}
                    type={"place"}
                    prefix={this.props.navigation.state.params.place.name}
                    places={this.placesList}
                    navfunction={(place) => { this.props.navigation.navigate('Description', { place: place }) }}/*style={{margin: 10}}*/
                />
                <ScrollView>

                    {/*
                    <View style={{ marginTop: 200 }}>
                        <Text>{I18n.t('sugestions')}</Text>
                        {MapService.getSugestionsPlaces().map((marker) => (
                            <View style={{ marginTop: 5 }} key={marker.key}>
                                <Button
                                    key={marker.key}
                                    style={{ marginTop: 15 }}
                                    onPress={() => this.props.navigation.navigate('Description', { param: marker, name: marker.title, city: this.props.navigation.state.params.name })}
                                    title={marker.title}>
                                </Button>
                            </View>
                        ))}
                    </View>
                        */}
                </ScrollView>
            </View>
        )
    }

}