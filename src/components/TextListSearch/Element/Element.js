import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    Image,
    Button,
    Text,
} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';
//import { getIcon } from './ElementIcon';
import { getIcon } from '../../../services/IconService';

import { useSelector } from 'react-redux';
import Colors from '../../../helpers/Colors';
import { AsyncStorage } from 'react-native';
import NavigationService from '../../../services/NavigationService';
import FavoriteButton from '../../Favorite/FavoriteButton';
import colors from '../../../styles/colors';

export default class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.place,//navigation.state.params.place.name,
            favorite: false,
            type: props.type,
            favkey: props.prefix !== undefined ? props.prefix + props.place : props.place,
            prefix: '',
            id: props.id,
            subtext: props.subText !== 'undefined' && props.subText != undefined ? props.subText : '',
        }
        //console.log("prop", props, props.subText)
        //this._retrieveData()

        //console.log('bip1', this.state.favorite)
        //console.log('bip22', props.type)
        this.navfunction = props.navfunction;
    }

    async componentDidMount() {
        //console.log("bip fav", await this.isonlist())
        if (this.props.subText !== undefined && this.props.subText !== 'undefined') {
            this.setState({ subText: this.props.subText })
            console.log(this.props.subText)
        }
        if (this.props.prefix !== undefined && this.props.prefix != 'undefined') {
            this.setState({ favkey: this.props.prefix + this.state.name })
        }
        else {
            console.log("prop", this.props)
        }
        this.setState({ favorite: await this.isonlist() })

        /*if (this.props.params !== undefined && this.props.params !== [])
            if (this.props.params.city !== undefined)
                this.setState({ favkey: this.props.params.city })*/

        /*AsyncStorage.getItem("myKey").then((value) => {
           // this.setState({"myKey": value});
           console.log("bip async", value)
        }).done();
        */
        //AsyncStorage.setItem('Fav-' + this.state.type, "");
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

    _onPressButton() {
        //this.props.navfunction(this.state.name)
        console.log('bip3', this.state.name)
        //this.navfunction(this.state.name);//change back//or not
        //this.navfunction({ name: this.state.name, id: this.state.id, favkey: this.state.favkey });
        console.log("id", this.props.id)
        NavigationService.navigate(this.props.type, { name: this.props.name, id: this.props.id })
    }

    render() {
        //console.log('bip1', this.state.subText)
        if (this.state.name != undefined && this.state.name != 'undefined') {//&& !(this.props.onlyFavorite && !this.state.favorite)
            if (this.state.name.length > 1)
                return (
                    <TouchableOpacity onPress={() => this._onPressButton()}>
                        <View style={styles.element, {
                            //borderBottomColor: 'black',
                            //borderBottomWidth: 1,
                            flex: 1, flexDirection: 'row',
                            justifyContent: 'space-between',
                            //height: 50,
                        }}>
                            {/*<View style={{ position: 'absolute', left: 20, top: 5, alignSelf: "flex-end" }}>
                                {getIcon(this.state.type)}
                                <Image
                                    style={{ overflow: "hidden", width: 40, height: 40, borderRadius: 20 }}//
                                    //source={require('../../assets/tmp/pobrany plik.jpg')}
                                    source={require('../../../assets/tmp/tower.jpg')}
                                />
                            </View>*/}
                            <View /*name */>
                                <Text style={styles.name}>{this.state.name}</Text>
                                {this.props.subText != undefined && this.props.subText != 'undefined' &&
                                    <View>
                                        <Text style={styles.subText}>
                                            {this.props.subText}
                                        </Text>
                                    </View>
                                }
                            </View>
                            <FavoriteButton
                                name={this.props.name}
                                id={this.props.id}
                                type={this.props.type}
                                //Color={colors.primaryLight2}
                            />
                            {/*<View style={{ marginRight: 10, marginTop: 10, }}>
                                <TouchableWithoutFeedback onPress={() => this.changeFavoriteData()}>
                                    <Icon size={30} color={Colors.yelow}
                                        name={this.state.favorite ? 'star' : 'staro'} 
                                    />
                                </TouchableWithoutFeedback>
                            </View>/*}}*/}

                        </View>
                    </TouchableOpacity>

                )
            else {
                console.log("empty name")
                return (
                    <View>

                    </View>
                )
            }
        }
        else {
            console.log("no name")
            return (
                <View>

                </View>
            )
        }
    }
}