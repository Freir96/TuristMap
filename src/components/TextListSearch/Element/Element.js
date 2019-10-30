import React, { useCallback } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    Button,
    Text,
} from 'react-native';
import styles from '../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import Colors from '../../../helpers/Colors';
import { AsyncStorage } from 'react-native';

export default class Element extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.place,//navigation.state.params.place.name,
            favorite: false,
            type: props.type,
        }
        //this._retrieveData()
        
        //console.log('bip1', this.state.favorite)
        //console.log('bip2', props)
        this.navfunction = props.navfunction;
    }

    async componentDidMount() {
        console.log("bip fav", await this.isonlist())
        this.setState({favorite: await this.isonlist()})
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
        console.log("bip list", list);
        for (var i = 0; i < totest.length; i++) {
            if(totest[i] === this.state.name) {
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
        list = list.replace(this.state.name + ";", "");
        console.log("bip remove2", list);
        this._storeData(list);
    }

    async addToList() {
        var list = await this._retrieveData();
        console.log("bip list2", list);
        list = list + this.state.name + ";";
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
            if (value == null) {
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
        console.log('bip3', this.state)
        this.navfunction(this.state.name);
    }

    render() {
        //console.log('bip1', this.props.places)
        return (
            <TouchableOpacity onPress={() => this._onPressButton()}>
                <View style={styles.element, {
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    flex: 1, flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                }}>

                    <View /*distance */>

                    </View>
                    <View /*circle photo */>

                    </View>
                    <View /*name */>
                        <Text >{this.state.name}</Text>
                    </View>
                    <View /*save favorite */ style={{ marginRight: 10 }}>
                        <TouchableWithoutFeedback onPress={() => this.changeFavoriteData()}>
                            <Icon size={30} color={Colors.yelow}
                                name={this.state.favorite ? 'heart' : 'hearto'}
                            //onPress={(event) => addToFavourites ? this.addToMyTopics(event, item.topicName) : this.removeFromMyTopics(event, item.topicName)} 
                            />
                        </TouchableWithoutFeedback>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }
}