import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    FlatList,
    TouchableOpacity,
    TouchableHighlight,
    Text,
} from 'react-native';
import styles from './styles';
import colors from '../../styles/colors';

export default class InfoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            value: props.value,
            showText: false,
        }
        console.log(props)
        console.log(props.value)
    }

    _onPress() {
        this.setState({ showText: !this.state.showText })
    }

    render() {
        return (
            <View style={{ width: "85%", alignSelf: 'center' }}>
                <TouchableOpacity
                    onPress={() => this._onPress()}

                //onShowUnderlay={separators.highlight}
                //onHideUnderlay={separators.unhighlight}
                >
                    <View style={{ backgroundColor: colors.darkPrimary, alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={styles.titleStyle}>{this.state.title}</Text>
                        <View style={this.state.showText ? styles.triangle : styles.triangleDown}>
                            {/*<Text>bip</Text>*/}
                        </View>
                    </View>
                </TouchableOpacity>
                {this.state.showText &&
                    <View>
                        <Text style={styles.textStyle}>{this.state.value}</Text>
                    </View>
                }
            </View>

        )
    }
}