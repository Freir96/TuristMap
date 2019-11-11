import React, { useCallback } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import styles from './styles';
import TextListSearch from '../TextListSearch';
import { SearchBar } from 'react-native-elements';

import MapService from '../../services/MapService';
import PlaceService from '../../services/PlaceService';

import I18n from '../../i18n/i18n';

export default class Home extends React.Component {
  constructor() {
    super()
    this.cityList = PlaceService.getCityList()
    this.state = {
      text: '',
      //value: 'City',
      //isMapReady: false,
      //markers: [],
      cityList: this.cityList,
    }

  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
    }
  }

  _onHamburgerClicked = () => { this.optionsMenu.setVisibility(!this.optionsMenu.state.visible) }

  getMatchingcities(substring) {
    var matchingcities = [];
    for (var i = 0; i < this.state.cityList.length; i++) {
      if (this.cityList[i].name.includes(substring))
        matchingcities.push({ id: this.cityList[i].id, name: this.cityList[i].name, });
    }
    //this.setState({cityList: matchingcities});
    return matchingcities;
  }

  /*getSugestions() {
    var options = [];
    const sugestions = MapService.getSugestionscities();
    for (var i = 0; i < sugestions.length; i++)
      options.push(<Button key={i} onPress={() => this.props.navigation.navigate('CityView', { name: sugestions[i] })} title={sugestions[i]}></Button>);
    return options;
  }*/

  render() {
    return (
      <View style={[styles.container, { width: '100%' }]}>
        <View style={{
          backgroundColor: this.state.text,
          borderBottomColor: '#000000',
          borderBottomWidth: 1
        }}
        >
        </View>
        <Image
          style={{ width: '90%' }}//, height: 50
          //source={require('../../../imgs/logo1.tif')}
          source={require('../../assets/logo/logo1-1.jpg')}
        />
        <TextListSearch
          searchbar={true}
          type={"city"}
          places={this.cityList}
          navfunction={(place) => { this.props.navigation.navigate('CityView', { place: place }) }}/*style={{margin: 10}}*/
        />
      </View>
    )
  }
}