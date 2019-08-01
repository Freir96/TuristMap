import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import Profile from '../Profile';
import Home from '../Home';
import Map from '../Map';
import Description from '../Description';
import CityView from '../CityView';

import homeIcon from '../../assets/ic_home/ic_home.png';
import settingsIcon from '../../assets/ic_settings/ic_settings.png';
import Colors from '../../helpers/Colors';
/*
const iconForTab = ({ state }) => {
  switch (state.routeName) {
    case 'Home':
      return homeIcon;
    case 'Profile':
      return settingsIcon;
    default:
      return null;
  }
};

const TabIcon = ({ icon, tintColor }) => (// eslint-disable-line
  <Image
    source={icon}
    style={{ tintColor }}
  />
);

const ProfileStack = createStackNavigator({ Profile });
const HomeStack = createStackNavigator({ Home });
const MapStack = createStackNavigator({ Map });
const DescriptionStack = createStackNavigator({ Description });
const AppStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
    Map: MapStack,
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.primary,
      inactiveTintColor: Colors.gray,
      style: {
        backgroundColor: Colors.White,
      },
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (// eslint-disable-line
        <TabIcon
          icon={iconForTab(navigation)}
          tintColor={tintColor}
        />
      ),
    }),
  },
);

export default AppStack;
*/
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: Profile},
  Map: {screen: Map},
  Description: {screen: Description},
  CityView: {screen: CityView},
});

const App = createAppContainer(MainNavigator);

export default App;