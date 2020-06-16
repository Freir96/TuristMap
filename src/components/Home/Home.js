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

import styles from './styles';
import colors from '../../styles/colors';

import ManuItem from './ManuItem';
import { Overlay } from 'react-native-elements';

import TextListSearch from '../TextListSearch';
import { SearchBar } from 'react-native-elements';
import PlacesList from '../PlacesList/PlacesList';

import MapService from '../../services/MapService';
import PlaceService from '../../services/PlaceService';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';
import { I18nManager, AsyncStorage } from "react-native";
import LanguageItem from './LanguageItem';

import AntIcon from 'react-native-vector-icons/AntDesign';

import I18n from '../../i18n/i18n';
import { NavigationActions } from 'react-navigation'

import NavigationService from '../../services/NavigationService';
import { getIcon } from '../../services/IconService';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.cityList = PlaceService.getCityList()
    this.state = {
      text: '',
      language: 'pl',
      showList: '',
      active: '',
      //value: 'City',
      //isMapReady: false,
      //markers: [],
      //cityList: this.cityList,
    }
    NavigationService.setNavigator(this.props.navigation)
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

  static navigationOptions = ({ navigation }) => {
    let title = <Text style={{ fontSize: 20, color: colors.white }}>
      {navigation.getParam('place').title}
    </Text>
    //let currentProfile = navigation.getParam('profile')

    return {
      headerTitle: title,
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
      },
      headerTintColor: colors.darkGrey,
      headerRight: (<View><Text>{"      "}</Text></View>),
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    //console.log(nextState)
    return nextState != this.state;
  }

  hideList() {
    this.setState({ showList: '' })
  }

  navigateToScreen = (route, params) => () => {
    console.log('route')
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: params,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: '',
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

  renderRow(rowData, rowID, highlighted) {
    let icon = require('../../assets/tmp/pol.jpg');
    let evenRow = rowID % 2;
    //console.log(rowData)
    return (
      <View style={{ flexDirection: 'row' }}>
        {DEMO_OPTIONS_2.map((item, i) =>
          <LanguageItem
            key={i}
            value={item.value}
            languageIcons={languageIcons}
            changeLanguage={(val) => this.changeLanguage(val)}
          />

        )}
      </View>
      //<ManuItem rowData={rowData} highlighted={highlighted} />
    );
  }


  _dropdown_2_renderButtonText(rowData) {
    const { name } = rowData;
    return `${name}`;
  }

  async changeLanguage(lan) {
    this.refs.dropdown_2.hide()
    I18n.locale = lan//.value;
    this.setState({ language: lan })
    console.log(lan)
    //console.log(I18n.t('places'));
    try {
      await AsyncStorage.setItem('Language', lan.value);
    }
    catch (err) {
      console.log(err);
    }
    //this.refs.dropdown_2.select(0)
  }

  showList(listName) {
    this.setState({ showList: listName });
  }

  /*render() {
    return (
      <Text>bip</Text>
    )
  }*/

  render() {
    return (
      <View style={[styles.container, { width: '100%', backgroundColor: colors.darkPrimary }]}>
        <Overlay
          isVisible={this.state.showList !== ""}
          onBackdropPress={() => this.setState({ showList: '' })}
          borderRadius={30}
          overlayBackgroundColor={colors.primaryLight}
          height={600}
          overlayStyle={{
            position: 'absolute',
            top: 20,
          }}
        >
          <PlacesList navfunction={(param) => this.navigateToScreen(this.state.showList, param)}
            hide={() => this.hideList()}
            type={this.state.showList}
            navigation={this.props.navfunction}
          />
        </Overlay>
        <View style={{
          backgroundColor: colors.primaryLight2,
          paddingTop: 10, paddingBottom: 10, width: '100%',
          borderTopLeftRadius: 30,
          borderTopEndRadius: 30,
          justifyContent: 'space-between',
          flexDirection: 'row', height: 90,
        }}>
          {/*<Text style={{ color: colors.primary, paddingRight: 120 }}>.</Text>*/}
          <View style={{ marginLeft: 20, marginTop: 5 }}>
            <TouchableOpacity onPress={() => { NavigationService.navigate('Contact') }}>
              <Image source={getIcon('contact_icon')} style={{ width: 50, height: 35 }} />
            </TouchableOpacity>
          </View>
          {/*<View style={{ flexDirection: 'column' }}>
            <TouchableOpacity style={{ alignSelf: 'center' }}>
              <AntIcon name='staro' size={40} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center' }}>{I18n.t("favorites")}</Text>
          </View>*/}
          <ModalDropdown ref="dropdown_2"
            style={{
              //alignSelf: 'flex-end',
              marginRight: 20
            }}
            //textStyle={styles.dropdown_2_text}
            dropdownStyle={styles.dropdown}
            //onSelect={(index, item) => { this.changeLanguage(item) }}
            //options={DEMO_OPTIONS_2}tmp_option
            options={tmp_option}
            renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
            renderRow={this.renderRow.bind(this)}
          //renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
          >
            <View style={{
              position: 'relative', alignSelf: 'flex-end',
              width: 55, height: 45,
              borderRadius: 50,
              borderWidth: 1,
              justifyContent: 'space-between',
              borderColor: colors.black,
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
            }}>
              <Image style={{ width: 34, height: 34, borderRadius: 17, alignSelf: 'center' }}
                source={languageIcons[this.state.language]}//{require('../../assets/tmp/pol.jpg')}
              >

              </Image>
              {/*<Text style={{ fontSize: 18, textAlignVertical: 'center' }}>{this.state.language.toUpperCase() + "  "}</Text>*/}
            </View>
          </ModalDropdown>
        </View>
        <View style={{
          backgroundColor: colors.primaryLight2,
          //borderTopLeftRadius: 30,
          //borderTopEndRadius: 30,
        }}>
          <View style={{
            backgroundColor: colors.darkPrimary,// white,
            width: '100%',
            //borderRadius: 30,
            borderTopEndRadius: 30, borderTopLeftRadius: 30,
          }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={[styles.buttonContainerLeft]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'atraction' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={() => this.showList('atraction')}>
                  <Image style={[styles.buttonImage]}
                    source={getIcon(this.state.active !== 'atraction' ? 'atractions' : 'atraction_active')}>
                  </Image>
                  {/*<View>
                    {this.state.active === 'atraction' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('atraction_active')}></Image>
                    }
                    {this.state.active !== 'atraction' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('atractions')}></Image>
                  }
                  </View>*/}
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("atractions")}</Text>
              </View>
              <View style={[styles.buttonContainerRight]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'restaurant' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={() => this.showList('restaurant')}>
                  <Image style={[styles.buttonImage]}
                    source={getIcon(this.state.active !== 'restaurant' ? 'restaurant' : 'restaurant_active')}>
                  </Image>
                  {/*<View style={[styles.buttonImage]}>
                    {this.state.active === 'restaurants' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('restaurant_active')}></Image>
                    }
                    {this.state.active !== 'restaurants' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('restaurant')}></Image>
                    }
                  </View>*/}
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("restaurant").toLowerCase()}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={[styles.buttonContainerLeft]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'place' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={() => this.showList('place')}>
                  <View>
                    {this.state.active === 'place' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('place_active')}></Image>
                    }
                    {this.state.active !== 'place' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('places')}></Image>
                    }
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("places").toLowerCase()}</Text>
              </View>
              <View style={[styles.buttonContainerRight]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'weather' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={() => this.showList('weather')}>
                  <View>
                    {this.state.active === 'weather' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('weather_active')}></Image>
                    }
                    {this.state.active !== 'weather' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('weather')}></Image>
                    }
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("weather").toLowerCase()}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={[styles.buttonContainerLeft]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'Favorites' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={this.navigateToScreen('Favorites')}>
                  <View>
                    {this.state.active === 'Favorites' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('favorite_active')}></Image>
                    }
                    {this.state.active !== 'Favorites' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('favorite')}></Image>
                    }
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("favorites").toLowerCase()}</Text>
              </View>
              <View style={[styles.buttonContainerRight]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'Map' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={this.navigateToScreen('Map')}>
                  <View>
                    {this.state.active === 'Map' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('map_active')}></Image>
                    }
                    {this.state.active !== 'Map' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('map')}></Image>
                    }
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("map").toLowerCase()}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={[styles.buttonContainerLeft]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'Informations' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={this.navigateToScreen('Informations')}>
                  <View>
                    {this.state.active === 'Informations' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('information_active')}></Image>
                    }
                    {this.state.active !== 'Informations' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('info')}></Image>
                    }
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("information")}</Text>
              </View>
              <View style={[styles.buttonContainerRight]}>
                <TouchableWithoutFeedback style={[styles.button]}
                  onPressIn={() => this.setState({ active: 'shopping' })}
                  onPressOut={() => this.setState({ active: '' })}
                  onPress={() => {
                    () => this.showList('shopping')
                    this.setState({ showList: 'shopping' });
                  }}>
                  <View>
                    {this.state.active === 'shopping' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('shopping_active')}></Image>
                    }
                    {this.state.active !== 'shopping' &&
                      <Image style={[styles.buttonImage]}
                        source={getIcon('shopping_button')}></Image>
                    }
                  </View>
                </TouchableWithoutFeedback>
                <Text style={styles.buttonTitle}>{I18n.t("shopping")}</Text>
              </View>
            </View>
          </View>
        </View>
      </View >
    )
  }
}

const buttonSize = 50;
const languages = [{ value: 'Polski' }, { value: 'English' }]
const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];
const DEMO_OPTIONS_2 = [
  { name: "PL", value: 'pl' },
  { name: "EN", value: 'en' },
  { name: "EN", value: 'fr' },
  { name: "EN", value: 'de' },
  { name: "EN", value: 'sp' },
  { name: "EN", value: 'it' },
  { name: "EN", value: 'nr' },
  { name: "EN", value: 'cz' },
];

const tmp_option = [{ name: "PL", value: 'pl' }]

const languageIcons = []

languageIcons['pl'] = require('../../assets/language/pl.png')
languageIcons['fr'] = require('../../assets/language/fr.png')
languageIcons['cz'] = require('../../assets/language/cz.png')
languageIcons['de'] = require('../../assets/language/gr.png')
languageIcons['en'] = require('../../assets/language/uk.png')
languageIcons['sp'] = require('../../assets/language/sp.png')
languageIcons['it'] = require('../../assets/language/it.png')
languageIcons['nr'] = require('../../assets/language/nr.png')
