import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from '../optionsStyles'
//import globalStyles from '../../../styles/globalStyles'

export default class MenuOption extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.option]}>
                    <Text style={[styles.standardText]}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}