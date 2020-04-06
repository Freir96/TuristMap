import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import IOSIcon from "react-native-vector-icons/Ionicons";
//import MainScreen from "./MainScreen";
//import DetailScreen from "./DetailScreen";

import Home from '../Home';
import Map from '../Map';
import MainMap from '../Map/MainMap';
import Description from '../Description';
import CityView from '../CityView';
import Settings from '../Settings';
import Favorites from '../Favorites';
import Places from '../Places/Places';
import Informations from '../Informations/Informations';
import ContactInfo from '../ContactInfo/ContactInfo';
import Weather from '../Weather/Weather';

import I18n from '../../i18n/i18n';

const stackNav = createStackNavigator({
  Main: {
    //screen: Home,
    screen: MainMap,
    navigationOptions: ({ navigation }) => ({
      //title: "Home",
      title: I18n.t("map"),
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer() /*navigation.navigate("DrawerOpen")*/}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      title: "Map",
    })
  },
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }) => ({
      title: "Weather",
    })
  },
  ContactInfo: {
    screen: ContactInfo,
    navigationOptions: ({ navigation }) => ({
      title: "ContactInfo",
    })
  },
  Informations: {
    screen: Informations,
    navigationOptions: ({ navigation }) => ({
      title: "Informations",
    })
  },
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: "Home",
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Places: {
    screen: Places,
    navigationOptions: ({ navigation }) => ({
      title: I18n.t("places"),
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  CityView: {
    screen: CityView,
    navigationOptions: ({ navigation }) => ({
      title: "City",
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: ({ navigation }) => ({
      title: I18n.t("favorites"),
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Description: {
    screen: Description,
    navigationOptions: ({ navigation }) => ({
      title: "Description",
    })
  },
  Settings: {
    screen: Settings,
    navigationOptions: ({ navigation }) => ({
      title: "Settings",
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
});

export default stackNav;