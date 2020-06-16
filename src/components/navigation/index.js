/*import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthHandler from './AuthHandler';
import Auth from './AuthNavigator';
import App from './AppNavigator';

export default createAppContainer( // eslint-disable-line
  createSwitchNavigator(
    {
      App,
      Auth,
      AuthHandler,
    },
    {
      initialRouteName: 'AuthHandler',
    },
  ),
); // eslint-disable-line
*/

import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import SideMenu from '../menu/menu';
import stackNav from './stackNav';

const drawernav = createDrawerNavigator({
  Item1: {
    screen: stackNav,//{ screen:({navigation}) => <stackNav screenProps={drawerNavigation: navigation} /> },
  }
}, /*{
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width - 120,
  drawerPosition: 'right',
}*/
);
export default createAppContainer(drawernav)
//AppRegistry.registerComponent('Demo', () => drawernav);