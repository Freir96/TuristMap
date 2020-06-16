import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './styles';
import WeatherIcon from './WeatherIcon';
import { getIcon } from '../../services/IconService';

import colors from '../../styles/colors';

import I18n from '../../i18n/i18n';

export default class DayBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: [],
            isLoaded: true,
        }
    }

    render() {
        const conditions = this.props.conditions;
        //console.log(conditions)
        return (
            <View style={{
                flexDirection: 'row', marginBottom: 5, borderBottomColor: colors.black,
                borderBottomWidth: this.props.index < 6 ? 1 : 0,
                justifyContent: 'space-between',
            }} key={conditions.day}>
                <View>
                    <Text style={{ color: colors.white }}>.</Text>
                </View>
                <View /*style={{width: '50%'}}*/>
                    <View style={{ alignItems: 'center', marginRight: 5, flex: 1, justifyContent: 'center' }}>
                        <Text style={{
                            color: colors.black,
                            //position: 'absolute',
                            //left: 0, top: 0,
                            //right: 0, bottom: 0,
                            //alignSelf: "center",
                            fontSize: 12, fontFamily: 'Montserrat-SemiBold',
                            textAlignVertical: "center", textAlign: 'center'
                        }}>
                            {conditions.day.toUpperCase()}
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', /*position: 'absolute', right: 0,*/ flexDirection: 'row' }}>
                    <View style={{
                        height: boxHeight,
                        width: boxHeight, //backgroundColor: colors.black,
                        marginRight: 6
                    }}>
                        <Text style={{
                            textAlignVertical: "center",
                            textAlign: 'center', color: colors.black,
                            marginVertical: 4,
                            fontFamily: 'Montserrat-SemiBold'
                        }}>
                            {conditions.temp + '°C'}
                        </Text>
                    </View>
                    <View style={{ borderRadius: 6, backgroundColor: colors.primary }}>
                        {/*<WeatherIcon size={2} iconSize={1} name="sunny" />*/}
                        <Image
                            source={getIcon(conditions.weatherState)}
                            style={{ height: boxHeight, width: boxHeight, borderRadius: 6, marginBottom: 1 }}
                        />
                    </View>
                </View>
            </View>
        )
    }

}

const boxHeight = 35;

const images = [
    require("../../assets/weather_elements/sun_cloud.png")
]

var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];