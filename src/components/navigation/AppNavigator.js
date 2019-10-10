import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  AppNavigator,
} from 'react-navigation';

import Profile from '../Profile';
import Home from '../Home';
import Map from '../Map';
import Description from '../Description';
import CityView from '../CityView';

import homeIcon from '../../assets/ic_home/ic_home.png';
import settingsIcon from '../../assets/ic_settings/ic_settings.png';
import Colors from '../../helpers/Colors';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Button from '../common/Button';

Home.navigationOptions = ({ navigation }) => {
  return {
      headerRight:<Button title={"bip"} onPress={console.log('bip7', navigation)}></Button>
          /*<TouchableOpacity
              onPress={console.log('bip', navigation)}//navigation.state.routes[navigation.state.index].params ? navigation.state.routes[navigation.state.index].params['onHamburgerClicked'] : null}
          >
              <Icon
                  name={'options-vertical'}
                  style={{
                      marginRight: 7,
                      paddingLeft: 15
                  }}
                  size={25}
                  color={Colors.white}
              />
          </TouchableOpacity>*/
  }
}
/*Description.navigationOptions = ({ navigation }) => {
  return {
      headerRight:<Button title={"bip"} onPress={console.log('bip7', navigation)}></Button>
          <TouchableOpacity
              onPress={console.log('bip', navigation)}//navigation.state.routes[navigation.state.index].params ? navigation.state.routes[navigation.state.index].params['onHamburgerClicked'] : null}
          >
              <Icon
                  name={'options-vertical'}
                  style={{
                      marginRight: 7,
                      paddingLeft: 15
                  }}
                  size={25}
                  color={Colors.white}
              />
          </TouchableOpacity>
  }
}*/
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  //Profile: {screen: Profile},
  Map: {screen: Map},
  Description: {screen: Description},
  CityView: {screen: CityView},
});

const App = createAppContainer(MainNavigator);


export default App;