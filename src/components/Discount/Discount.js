import React, { Component } from 'react'
import QRCode from 'react-native-qrcode';
import { getUniqueId, getManufacturer } from 'react-native-device-info';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class Discount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'http://facebook.github.io/react-native/',
        };
        this.id = '';
    }

    componentDidMount() {
        this.id = getUniqueId();
        console.log("bip id", this.id)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}
                />
                <Text>{this.id}</Text>
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='purple'
                    fgColor='white' />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});