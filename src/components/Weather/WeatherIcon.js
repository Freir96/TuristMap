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
import Colors from '../../helpers/Colors';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';

export default class WeatherIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log()
    }

    componentDidMount() {
        weaterIcons['sunny'] = <FontAwesomeIcon name="sun-o" size={this.props.iconSize} color={colors.white} />
    }

    render() {
        return (
            <View style={{
                backgroundColor: colors.newYellow,
                borderRadius: this.props.size / 5,
                //width: this.props.size,
                //height: this.props.size,
                padding: this.props.size - this.props.iconSize,
                alignItems: 'center',
            }}>
                {weaterIcons[this.props.name]}
            </View>
        )
    }
}

const weaterIcons = [];



