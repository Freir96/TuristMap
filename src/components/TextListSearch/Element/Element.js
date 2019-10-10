import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    Text,
} from 'react-native';
import { useSelector } from 'react-redux';

export default class Element extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}>
                <View /*distance */>

                </View>
                <View /*circle photo */>

                </View>
                <View /*name */>

                </View>
                <View /*save favorite */>

                </View>
            </View>
        )
    }
}