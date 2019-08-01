import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
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

var title = ''

export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            params: props.navigation.state.params.param,
        }
        //console.log('bip', this.props.navigation.state);
        this.title = this.props.navigation.state.params.param.title;
    }

    static navigationOptions = ({ navigation }) => {
        let title = <Text style={{ fontSize: 20 }}>{navigation.getParam('title')}</Text>
        //let currentProfile = navigation.getParam('profile')
        console.log('bip', navigation.getParam('title'));
        return {
            headerTitle: title,
            headerStyle: {
                backgroundColor: colors.light
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: 'bold',
                color: colors.white,
            },
            headerTintColor: colors.white
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Dupa</Text>
                <Text>{this.title}</Text>
            </View>
        )
    }
}