import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import I18n from '../../i18n/i18n';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    //console.log("bip menu", props)
  }


  navigateToScreen = (route, params) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
      params: params,
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.sectionHeadingStyle}>
              {I18n.t("menu")}
            </Text>
            {/*<View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Main')}>
                {I18n.t("home")}
              </Text>
            </View>*/}
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <AntIcon name={"heart"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Favorites')}>
                  {I18n.t("favorites")}
                </Text>
              </View>
            </View>
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <Ionicon name={"ios-happy"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places', {place: "atraction"})}>
                  {I18n.t("atractions")}
                </Text>
              </View>
            </View>
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcon name={"weather-pouring"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Weather')}>
                  {I18n.t("weather")}
                </Text>
              </View>
            </View>
            {/*<View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places')}>
                {I18n.t("places")}
              </Text>
            </View>*/}
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <MaterialIcon name={"hotel"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places', {place: "hotel"})}>
                  {"Hotel"/*I18n.t("places")*/}
                </Text>
              </View>
            </View>
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <Ionicon name={"md-restaurant"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places', {place: "restaurant"})}>
                  {I18n.t( "restaurants")}
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <MaterialIcon name={"settings"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                  {I18n.t("settings")}
                </Text>
              </View>
            </View>
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcon name={"information"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Informations')}>
                  {I18n.t("information")}
                </Text>
              </View>
            </View>
            <View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcon name={"phone"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Contact')}>
                  {I18n.t("contact")}
                </Text>
              </View>
            </View>
            {/*<View style={styles.navSectionStyle}>
              <View style={styles.itemIcon}>
                <MaterialCommunityIcon name={"weather-pouring"} size={25} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                  {I18n.t("weather")}
                </Text>
              </View>
            </View>*/}

            {/*<View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.closeDrawer()}>
                {I18n.t("close")}
              </Text>
            </View>*/}
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Logo</Text>
        </View>
      </View >
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;