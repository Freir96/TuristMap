import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
    Button,
    Text,
} from 'react-native';

import I18n from '../../i18n/i18n';

import FavoriteService from '../../services/FavoriteService';
import { AsyncStorage } from 'react-native';

import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';
import colors from '../../styles/colors';
import { getIcon } from '../../services/IconService';
import Icon from 'react-native-vector-icons/AntDesign';

export default class FavoriteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
            favkey: props.name + '.' + props.id,
            type: props.type,
        }
        console.log("bip", props)
    }

    async componentDidMount() {
        this.setState({ favorite: await this.isonlist() })
    }

    async update(name, id) {
        this.setState({ favkey: name + '.' + id })
        this.setState({ favorite: await this.isonlist() })
    }

    async isonlist() {
        const list = await this._retrieveData();
        var totest = list.split(";");
        console.log("bip list", list, "key", this.state.favkey);
        for (var i = 0; i < totest.length; i++) {
            if (totest[i] === this.state.favkey) {
                console.log("bip val", totest[i]);
                return true;
            }

        }
        //console.log("bip val", "not");
        return false;
    }


    async removeFromList() {
        var list = await this._retrieveData();
        console.log("bip remove", list);
        list = list.replace(this.state.favkey + ";", "");
        console.log("bip remove2", list);
        this._storeData(list);
    }

    async addToList() {
        var list = await this._retrieveData();
        console.log("bip list2", list);
        list = list + this.state.favkey + ";";
        console.log("bip list2", list);
        this._storeData(list);
    }

    async _storeData(val) {
        try {
            //AsyncStorage.setItem('Fav', isFavorite);
            //this._retrieveData();
            AsyncStorage.setItem('Fav-' + this.state.type, val);
        } catch (error) {
            console.log('bip err', error)
        }
    };

    changeFavoriteData() {
        if (this.state.favorite) {
            this.removeFromList();
        }
        else {
            this.addToList();
        }
        //this._storeData(!this.state.favorite);
        this.setState({ favorite: !this.state.favorite });
    }

    async _retrieveData() {
        var value = ''
        try {
            //const value = await AsyncStorage.getItem('Fav');
            value = await AsyncStorage.getItem('Fav-' + this.state.type);
            if (value == null || value === undefined) {
                try {
                    //AsyncStorage.setItem('Fav', isFavorite);
                    AsyncStorage.setItem('Fav-' + this.state.type, '');
                } catch (error) {
                    console.log('bip err', error)
                }
                return "";
            }
        } catch (error) {
            console.log('bip err', error)
        }
        return value;
    }


    render() {
        return (
            <View /*save favorite */ style={{ marginRight: 10, marginTop: 10, }}>
                <TouchableWithoutFeedback onPress={() => this.changeFavoriteData()}>
                    <Icon size={30} color={colors.lightGrey}
                        name={this.state.favorite ? 'star' : 'staro'}
                    //onPress={(event) => addToFavourites ? this.addToMyTopics(event, item.topicName) : this.removeFromMyTopics(event, item.topicName)} 
                    />
                </TouchableWithoutFeedback>
            </View>
        )
    }
}