import React, { useCallback } from 'react';
import {
  View,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';

import TextStyles from '../../helpers/TextStyles';
import strings from '../../localization';
import getUser from '../../selectors/UserSelectors';

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import SearchableDropdown from 'react-native-searchable-dropdown';
import TextListSearch from '../TextListSearch';
import { SearchBar } from 'react-native-elements';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapService from '../../services/MapService';
import { Marker } from 'react-native-maps';
//import Button from '../common/Button';

import OptionsMenu from '../menu/OptionsMenu';
import MenuOption from '../menu/option/MenuOption';

import I18n from '../../i18n/i18n';

var radio_props = [
  { label: 'param1', value: 'City' },
  { label: 'param2', value: 'Hotel' }
];
/*export default class Home extends React.Component {
  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={{ latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}
        showsUserLocation={true} />);
  }
}*/
//*
export default class Home extends React.Component {
  constructor() {
    super()
    this.cityList = MapService.getCityList()
    this.state = {
      text: '',
      value: 'City',
      isMapReady: false,
      markers: [],
      cityList: this.cityList,
    }

  }

  static navigationOptions = ({ navigation }) => {
    //let title = <Text style={{ fontSize: 20 }}>{navigation.getParam('name')}</Text>
    //let currentProfile = navigation.getParam('profile')
    //console.log('bip', navigation.getParam('title'));
    return {
      title: 'Home',
      /*headerRight:
        <TouchableOpacity
          onPress={navigation.state.routes[navigation.state.index].params ? navigation.state.routes[navigation.state.index].params['onHamburgerClicked'] : null}
        >
          <Icon
            name={'options-vertical'}
            style={{
              marginRight: 7,
              paddingLeft: 15
            }}
            size={25}
            color={colors.white}
          />
        </TouchableOpacity>,*/
    }
  }

  _onHamburgerClicked = () => { this.optionsMenu.setVisibility(!this.optionsMenu.state.visible) }

  /*componentDidMount() {
    this.setState({ markers: MapService.getLocations('Gliwice') })
  }

  onMapLayout = () => {
    this.setState({ isMapReady: true });
  }*/

  /*getMatchingCitys(substring) {
    var matchingCitys = [];
    for (var i = 0; i < this.state.cityList.length; i++) {
      if (this.state.cityList[i].includes(substring))
        matchingCitys.push(<Button onPress={() => this.props.navigation.navigate('Map', { name: this.state.cityList[i] })} title={this.state.cityList[i]}></Button>)
    }
  }*/
  getMatchingCitys(substring) {
    var matchingCitys = [];
    for (var i = 0; i < this.state.cityList.length; i++) {
      if (this.cityList[i].includes(substring))
        matchingCitys.push({ id: i, name: this.cityList[i], });
    }
    //this.setState({cityList: matchingCitys});
    return matchingCitys;
  }

  getSugestions() {
    var options = [];
    const sugestions = MapService.getSugestionsCitys();
    for (var i = 0; i < sugestions.length; i++)
      options.push(<Button key={i} onPress={() => this.props.navigation.navigate('CityView', { name: sugestions[i] })} title={sugestions[i]}></Button>);
    return options;
  }

  render() {
    return (
      <View style={[styles.container, { width: '100%' }]}>

        <OptionsMenu
          ref={(ref) => this.optionsMenu = ref}>
          <MenuOption text={I18n.t('phone')} onPress={() => console.log('bip ckick')} />
          <MenuOption text={I18n.t('settings')} onPress={() => console.log('bip ckick')} />
          <MenuOption text={I18n.t('phone')} onPress={() => console.log('bip ckick')} />
          <MenuOption text={I18n.t('phone')} onPress={() => console.log('bip ckick')} />
          <MenuOption text={I18n.t('phone')} onPress={() => console.log('bip ckick')} />
        </OptionsMenu>
        <View style={{
          backgroundColor: this.state.text,
          borderBottomColor: '#000000',
          borderBottomWidth: 1
        }}
        >
          {/*<SearchableDropdown
            onItemSelect={(item) => {
              //console.log('bip', item)
              this.props.navigation.navigate('CityView', { name: item.name })
              //this.props.navigation.navigate('CityView', { name: item })
              //const items = this.state.selectedItems;
              //items.push(item)
              //this.setState({ selectedItems: items });
            }}
            containerStyle={{ padding: 5 }}
            onRemoveItem={(item, index) => {
              //const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              //this.setState({ selectedItems: items });
            }}
            itemStyle={{
              padding: 10,
              marginTop: 2,
              backgroundColor: '#ddd',
              borderColor: '#bbb',
              borderWidth: 1,
              borderRadius: 5,
            }}
            itemTextStyle={{ color: '#222' }}
            itemsContainerStyle={{ maxHeight: 140 }}
            items={this.getMatchingCitys(this.state.text)}
            //defaultIndex={2}
            resetValue={false}
            textInputProps={
              {
                placeholder: I18n.t('findCity'),
                underlineColorAndroid: "transparent",
                style: {
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                },
                onTextChange: text => this.setState({ text: text })//this.getMatchingCitys(text)
              }
            }
            listProps={
              {
                nestedScrollEnabled: true,
              }
            }
          />*/}
          {/*<TextInput onChangeText={(text) => this.setState({ text })}
            //multiline={true}
            //numberOfLines={2}
            style={{ backgroundColor: '#FAFAFA', width: 250 }}
            value={this.state.text}
            placeholder={'' + this.state.value + '...'}
          />*/}
          {/*<RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            labelHorizontal={true}
            buttonColor={'#2196f3'}
            animation={true}
            onPress={(value) => { this.setState({ value: value }) }}
          />*/}
        </View>
        
        <TextListSearch places={this.cityList} navfunction={(name) => {this.props.navigation.navigate('CityView', { name: name })}}/*style={{margin: 10}}*/ />
        {/*<ScrollView>
          <View style={{ marginTop: 200 }}>
            <Text>{I18n.t('sugestions')}</Text>
            {MapService.getSugestionsCitys().map((city) => (
              <View style={{ marginTop: 5 }} key={city}>
                <Button
                  //style={{ marginTop: 15 }}
                  onPress={() => this.props.navigation.navigate('CityView', { name: city })}
                  title={city}>
                </Button>
              </View>
            ))}
          </View>
        </ScrollView>*/}
      </View>
    )
  }
}
/*
Home.navigationOptions = {
  drawer: {
      icon: () => (
        <Image
          source={require('../../../imgs/home.png')}
          style={[styles.tabIcon, {tintColor: 'black'}]}
        />
  )}
};*/