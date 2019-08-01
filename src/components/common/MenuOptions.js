import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
//import TextStyles from '../helpers/TextStyles';
import Colors from '../../helpers/Colors';
import MenuTile from './MenuTile';


export default class MenuOptions extends React.Component {
    render() {
        return(
            <View>
                <View>
                    <MenuTile></MenuTile>
                    <MenuTile></MenuTile>
                </View>
                <View>
                    <MenuTile></MenuTile>
                    <MenuTile></MenuTile>
                </View>
            </View>
        )
    }
}

//return MenuTile;