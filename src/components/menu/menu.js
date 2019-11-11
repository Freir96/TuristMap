import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles from './styles';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import I18n from '../../i18n/i18n';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    //console.log("bip menu", props)
  }


  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              {I18n.t("menu")}
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Main')}>
                {I18n.t("home")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Favorites')}>
                {I18n.t("favorites")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Map')}>
                {I18n.t("map")}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Places')}>
                {I18n.t("places")}
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
                {I18n.t("settings")}
              </Text>
              <Text style={styles.navItemStyle} onPress={() => this.props.navigation.closeDrawer()}>
                {I18n.t("close")}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;