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
        }
        this._retrieveData()
        console.log('bip1', this.state.favorite)
    }

    async _storeData(isFavorite) {
        try {
            //AsyncStorage.setItem('Fav', isFavorite);
            //this._retrieveData();
            AsyncStorage.setItem('Fav-' + this.state.name, isFavorite);
        } catch (error) {
            // Error saving data
        }
    };
    
    changeFavoriteData() {
        this._storeData(!this.state.favorite);
        this.setState({ favorite: !this.state.favorite });
    }

    async _retrieveData() {
        try {
            //const value = await AsyncStorage.getItem('Fav');
            const value = await AsyncStorage.getItem('Fav-' + this.state.name);
            if (value !== null) {
                // We have data!!
                console.log('bip1', value)
                this.setState({favorite: value})
                console.log(value);
            }
        } catch (error) {
            console.log('bip err', error)
        }
    }

    _onPressButton() {

    }

    render() {
        console.log('bip1', this.props.places)
        return (
            <TouchableOpacity onPress={this._onPressButton}>
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