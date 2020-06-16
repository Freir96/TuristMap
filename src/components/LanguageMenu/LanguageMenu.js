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
import ModalDropdown from 'react-native-modal-dropdown';
import { I18nManager, AsyncStorage } from "react-native";
import I18n from '../../i18n/i18n';

export default class LanguageMenu extends React.Component {
    constructor() {
        super()
    }

    async componentDidMount() {
        try {
            let value = await AsyncStorage.getItem('Language');
            if (value === undefined || value === null) {
                value = value.split("-")[0];
                AsyncStorage.setItem('Language', I18n.locale.split("-")[0]);
            }
            else {
                value = value.split("-")[0];
                I18n.locale = value;
            }
            this.setState({ language: value });
        } catch (error) {
            console.log('bip err', error)
        }
    }

    renderRow(rowData, rowID, highlighted) {
        let icon = require('../../assets/tmp/pol.jpg');
        let evenRow = rowID % 2;
        console.log(rowData)
        return (
            <TouchableHighlight underlayColor='cornflowerblue' >
                <View style={{ flexDirection: 'row', backgroundColor: colors.primary, marginHorizontal: 10 }}>
                    <Image style={{ width: 36, height: 36, borderRadius: 18 }}
                        //source={require('../../assets/tmp/pol.jpg')}
                        source={languageIcons[rowData.value]}>
                    </Image>
                    <Text style={[styles.dropdown_2_row_text, highlighted && { color: 'mediumaquamarine' }]}>
                        {`${rowData.name}`}
                    </Text>
                </View>
            </TouchableHighlight>
            //<ManuItem rowData={rowData} highlighted={highlighted} />
        );
    }

    _dropdown_2_renderButtonText(rowData) {
        const { name } = rowData;
        return `${name}`;
    }

    async changeLanguage(lan) {
        I18n.locale = lan.value;
        this.setState({ language: lan.value })
        console.log(I18n.t('places'));
        try {
            await AsyncStorage.setItem('Language', lan.value);
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        <ModalDropdown ref="dropdown_2"
            style={{
                //alignSelf: 'flex-end',
                marginRight: 20
            }}
            //textStyle={styles.dropdown_2_text}
            dropdownStyle={styles.dropdown}
            onSelect={(index, item) => { this.changeLanguage(item) }}
            options={DEMO_OPTIONS_2}
            renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
            renderRow={this.renderRow.bind(this)}
        //renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
        >
            <View style={{
                position: 'relative', alignSelf: 'flex-end',
                width: 100, height: 50,
                borderRadius: 50,
                borderWidth: 1,
                justifyContent: 'space-between',
                borderColor: colors.black,
                flexDirection: 'row',
                padding: 5,
            }}>
                <Image style={{ width: 36, height: 36, borderRadius: 18 }}
                    source={languageIcons[this.state.language]}//{require('../../assets/tmp/pol.jpg')}
                >

                </Image>
                <Text style={{ fontSize: 22, textAlignVertical: 'center' }}>{this.state.language.toUpperCase()}</Text>
            </View>
        </ModalDropdown>
    }
}