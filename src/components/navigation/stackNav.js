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
import Discount from '../Discount/Discount';
import Contact from '../Contact/Contact';
import Restaurant from '../Restaurant/Restaurant';
import Reservation from '../Reservation/Reservation';
import Place from '../Place/Place';
import Atraction from '../Atraction/Atraction';
import Shopping from '../Shoping/Shoping';

import I18n from '../../i18n/i18n';
import colors from '../../styles/colors';

const stackNav = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      header: null,
      swipeEnabled: false,
      //title: I18n.t("weather").toUpperCase() + "    ",
      /*headerTintColor: colors.white,
      headerTitleStyle: {
        fontSize: 30,
      },
      headerTitleStyle: {
        textAlign: 'center',
        //alignSelf: 'center', 
        width: '100%',
        color: colors.white,
        fontFamily: 'Montserrat-SemiBold',
      },
      headerRight: (<View><Text>{"      "}</Text></View>),
      headerStyle: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },*/
    })
    //screen: MainMap,
    /*navigationOptions: ({ navigation }) => ({
      //title: "Home",
      title: I18n.t("map"),
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),
      //headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })*/
  },
  Atraction: {
    screen: Atraction,
    navigationOptions: {
      header: null
    }
  },
  Shopping: {
    screen: Shopping,
    navigationOptions: {
      header: null
    }
  },
  Reservation: {
    screen: Reservation,
    navigationOptions: {
      header: null
    }
  },
  Restaurant: {
    screen: Restaurant,
    navigationOptions: {
      header: null
    }
  },
  Place: {
    screen: Place,
    navigationOptions: {
      header: null
    }
  },
  Map: {
    screen: MainMap,
    navigationOptions: ({ navigation }) => ({
      title: I18n.t("map"),
      headerTitleStyle: {
        textAlign: 'center',
        //alignSelf: 'center', 
        //width: '100%',
        color: colors.white,
        fontFamily: 'Montserrat-SemiBold',
      },
      headerStyle: {
        backgroundColor: colors.primaryLight,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },
    })
  },
  Discount: {
    screen: Discount,
    navigationOptions: ({ navigation }) => ({
      title: "Discount",
    })
  },
  Weather: {
    screen: Weather,
    navigationOptions: ({ navigation }) => ({
      header: null
      /*title: I18n.t("weather").toUpperCase() + "    ",
      headerTintColor: colors.white,
      headerTitleStyle: {
        fontSize: 30,
      },
      headerTitleStyle: {
        textAlign: 'center',
        //alignSelf: 'center', 
        width: '100%',
        color: colors.white,
        fontFamily: 'Montserrat-SemiBold',
      },
      headerRight: (<View><Text>{"      "}</Text></View>),
      headerStyle: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },*/
    })
  },
  /*Contact: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      },
      headerTitleAlign: 'center',
      titleStyle: {
        textAlign: 'center'
      },
      headerTitle: () => <Text style={{ textAlign: 'center', color: colors.white }}>{I18n.t('contact')}</Text>,
      headerTintColor: colors.white,
      headerStyle: {
        backgroundColor: colors.primary,
        headerLayoutPreset: 'center',
        textAlign: 'center',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      },
    })
  },*/
  Contact: {
    screen: Contact,
    navigationOptions: ({ navigation }) => ({
      header: null,
      /*title: I18n.t('contact').toUpperCase() + "   ",
      headerTintColor: colors.white,
      //headerLeft: (<View></View>),
      //headerRight: (<View><Text>{"  "}</Text></View>),
      headerTitleStyle: {
        textAlign: 'center',
        //alignSelf: 'center', 
        width: '100%',
        color: colors.white,
        fontFamily: 'Montserrat-SemiBold',
      },
      headerRight: (<View><Text>{"      "}</Text></View>),
      headerStyle: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        headerLayoutPreset: 'center',
        textAlign: 'center',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      }*/
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
      header: null
      /*title: "   ",
      headerVisible: false,
      headerTintColor: colors.white,
      //headerLeft: (<View></View>),
      //headerRight: (<View><Text>{"  "}</Text></View>),
      headerTitleStyle: {
        textAlign: 'center',
        //alignSelf: 'center', 
        width: '100%',
        color: colors.white,
        fontFamily: 'Montserrat-SemiBold',
      },
      headerRight: (<View><Text>{"      "}</Text></View>),
      headerStyle: {
        backgroundColor: colors.primary,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        headerLayoutPreset: 'center',
        textAlign: 'center',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      }*/
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
      header: null,
      //title: I18n.t('contact'),
      /*headerTintColor: colors.white,
      //headerLeft: (<View></View>),
      headerRight: (<View><Text>{"  "}</Text></View>),
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center', width: '100%',
        color: colors.white,
        fontFamily: 'Montserrat-SemiBold',
      },
      headerStyle: {
        backgroundColor: colors.primary,
        headerLayoutPreset: 'center',
        textAlign: 'center',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        elevation: 0,
      }*/
    })
  },
  Favorites: {
    screen: Favorites,
    navigationOptions: ({ navigation }) => ({
      header: null
      /*title: I18n.t("favorites"),
      headerRight: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IOSIcon name="ios-menu" size={30} />
      </TouchableOpacity>
      ),*/
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

const globalOptions = ({ navigation }) => ({
  //title: I18n.t('contact'),
  headerTintColor: colors.white,
  //headerLeft: (<View></View>),
  headerRight: (<View><Text>{"  "}</Text></View>),
  headerTitleStyle: {
    textAlign: 'center',
    alignSelf: 'center', width: '100%',
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
  },
  headerStyle: {
    backgroundColor: colors.primary,
    headerLayoutPreset: 'center',
    textAlign: 'center',
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    shadowRadius: 0,
    elevation: 0,
  }
})