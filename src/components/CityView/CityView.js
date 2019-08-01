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
import colors from'../../styles/colors';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapService from '../../services/MapService';
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
    constructor() {
        super()
        this.state = {
            text: '',
            value: 'all',
            isMapReady: false,
            markers: [],
            cityList: MapService.getCityList(),
        }

    }

    static navigationOptions = ({ navigation }) => {
        let title = <Text style={{fontSize: 20, color: colors.darkGrey}}>{navigation.getParam('name')}</Text>
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

    getSugestionsPlaces() {
        var options = [];
        const sugestions = MapService.getSugestionsPlaces();
        for (var i = 0; i < sugestions.length; i++) {
            console.log('bip2', sugestions[i])
            options.push(
                <Button
                    key={i}
                    style={{ margin: 5 }}
                    onPress={() => this.props.navigation.navigate('Description', { param: sugestions[i] })}
                    title={sugestions[i].title}>
                </Button>);
        }
        return options;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: this.state.text,
                    borderBottomColor: '#000000',
                    borderBottomWidth: 1
                }}
                >
                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        formHorizontal={true}
                        labelHorizontal={false}
                        buttonColor={'#2196f3'}
                        animation={true}
                        onPress={(value) => { this.setState({ value: value }) }}
                    />
                    <TextInput onChangeText={(text) => this.setState({ text })}
                        //multiline={true}
                        //numberOfLines={2}
                        style={{ backgroundColor: '#FAFAFA', width: 250 }}
                        //value={I18n.t(this.state.text)}
                        placeholder={'' + I18n.t(this.state.value) + '...'}
                    />
                </View>
                <ScrollView>
                    <View style={{ marginTop: 200 }}>
                        <Text>{I18n.t('sugestions')}</Text>
                        {MapService.getSugestionsPlaces().map((marker) => (
                            <View style={{ marginTop: 5 }} key={marker.key}>
                                <Button
                                    key={marker.key}
                                    style={{ marginTop: 15 }}
                                    onPress={() => this.props.navigation.navigate('Description', { param: marker, title: marker.title })}
                                    title={marker.title}>
                                </Button>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        )
    }

}