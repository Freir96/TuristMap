import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Text,
    Image,
} from 'react-native';
import colors from '../../styles/colors';

export default class LanguageItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                {/*<Text>{this.props.value}</Text>*/}
                <TouchableWithoutFeedback underlayColor='cornflowerblue' onPress={() => { this.props.changeLanguage(this.props.value) }}>
                    <View style={{ flexDirection: 'row', backgroundColor: colors.primaryLight, marginHorizontal: 4 }}>
                        <Image style={{ width: 30, height: 30, borderRadius: 15 }}
                            //source={require('../../assets/tmp/pol.jpg')}
                            source={this.props.languageIcons[this.props.value]}>
                        </Image>
                        {/*<Text style={[styles.dropdown_2_row_text, highlighted && { color: 'mediumaquamarine' }]}>
            {`${rowData.name}`}
          </Text>*/}
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}