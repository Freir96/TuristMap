import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Text,
    Image,
} from 'react-native';
import { NavigationActions } from 'react-navigation'

import NavigationService from '../../services/NavigationService';

import I18n from '../../i18n/i18n';
import colors from '../../styles/colors';

export default class Element extends React.Component {
    constructor(props) {
        super(props);
    }

    navigateToScreen = (route, params) => () => {
        console.log("starrt2")
        try {
            const navigateAction = NavigationActions.navigate({
                routeName: route,
                params: params,
            });
            this.props.navigation.dispatch(navigateAction);
            console.log("ok")
        }
        catch (err) {
            console.log(err)
        }
    }

    navfun(name, params) {
        //console.log("starrt1")
        //this.navigateToScreen(name, {});
        try {
            NavigationService.navigate(name, params)
        }
        catch (err) {
            console.log(err)
        }
        this.props.hide()
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => { this.navfun(this.capitalize(this.props.type), this.props.placeprops); console.log("nav", this.props.placeprops) }}
            //onPress={this.navigateToScreen('Map')}
            //onLongPress={() => navigate('Restaurant')}
            >
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: colors.white, fontSize: this.props.subtitle !== undefined ? 12 : 16, 
                        alignSelf: 'flex-start' }}>
                        {this.props.title}
                    </Text>
                    <Text style={{ marginLeft: 20 }}>
                        {this.props.subtitle}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}