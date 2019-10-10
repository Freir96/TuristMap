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
import Colors from '../../helpers/Colors';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapService from '../../services/MapService';
import { Marker } from 'react-native-maps';


import I18n from '../../i18n/i18n';

var title = ''

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        console.log('bip3', props.navigation.state);
        //console.log('bip4', MapService.getDescriptionById(this.getParams(props).key));
        this.state = {
            params: this.getParams(props),//props.navigation.state.params.param,
            id: this.getParams(props).key,
            description: MapService.getDescriptionById(this.getParams(props).key),//o tu <-------------------------
            phone: '000000000',
            city: this.props.navigation.state.params.city,
        }
        //console.log('bip', this.props.navigation.state);
        this.title = props.navigation.state.params.name//this.getParams(props).title;
        console.log('bip4', this.state.params)
        //console.log('bip44', this.state.description)
    }

    getParams(props) {
        console.log('bip2', props.navigation.state)
        if (props.navigation.state.params.param === undefined)
            return props.navigation.state.params;
        console.log('bip2', props.navigation.state.params.param)
        return props.navigation.state.params.param;
    }

    static navigationOptions = ({ navigation }) => {
        let title = <Text style={{ fontSize: 20 }}>{navigation.getParam('name')}</Text>
        //let currentProfile = navigation.getParam('profile')
        //console.log('bip', navigation.getParam('title'));
        return {
            headerTitle: title,
            headerStyle: {
                backgroundColor: colors.white
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.white,
            },
            headerTintColor: colors.darkGrey
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    alignItems='stretch'
                    style={{ width: '100%' }}
                >
                    <View style={{ padding: 20, width: '100%' }}>
                        <Text style={{ fontSize: 32 }}>{this.title}</Text>
                        <View style={{ paddingTop: 20 }}>
                            <View style={[styles.textContainer, { width: '80%' }]}>
                                <Text style={{ fontSize: 16 }}>{this.state.description.type}</Text>

                            </View>
                            <View style={[styles.textContainer, { width: '80%' }]}>
                                <Text style={{ fontSize: 16, flex: 0.3 }}>{I18n.t('phone')}: </Text>
                                <Text style={[styles.standardText, { flex: 0.7 }]}>{this.state.phone}</Text>
                            </View>
                            <View style={[styles.textContainer, { width: '80%' }]}>
                                <Text style={{ fontSize: 16, flex: 0.3 }}>{I18n.t('phone')}: </Text>
                                <Text style={[styles.standardText, { flex: 0.7 }]}>{this.state.phone}</Text>
                            </View>
                            <Text style={{ fontSize: 32 }}>{I18n.t('description')}</Text>
                            <Text style={{ fontSize: 16 }}>{this.state.description.description}</Text>
                            <Button onPress={() => this.props.navigation.navigate('Map', { placeId: this.state.id, city: this.state.city })} title={I18n.t('seeOnMap')}></Button>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}