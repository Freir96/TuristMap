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

import styles from './styles';
import colors from '../../styles/colors';

import I18n from '../../i18n/i18n';

export default class ManuItem extends React.Component {
    constructor(props) {
        super(props);
    }

    changeLanguage(lan) {
        I18n.locale = lan;
    }

    render() {
        const rowData = this.props.rowData;
        const highlighted = this.props.highlighted;
        return (
            <TouchableHighlight underlayColor='cornflowerblue' >
                <View style={{ flexDirection: 'row', backgroundColor: colors.primary }}>
                    <Image style={{ width: 36, height: 36, borderRadius: 18 }}
                        source={require('../../assets/tmp/pol.jpg')}>

                    </Image>
                    <Text style={[styles.dropdown_2_row_text, highlighted && { color: 'mediumaquamarine' }]}>
                        {`${rowData.name}`}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

}