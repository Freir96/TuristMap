import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { getIconType } from 'react-native-elements';
import React, {Component} from 'react';

var icons = [];
const def = "city";

icons["restaurant"] = (
    <Ionicon name={"md-restaurant"} size={25} />
)

icons["hotel"] = (
    <MaterialIcon name={"hotel"} size={25} />
)

icons["atractions"] = (
    <Ionicon name={"ios-happy"} size={25} />
)

icons["city"] = (
    <FontAwesome5Icon name={"city"} size={25} />
)

function getIcon(name) {
    if (icons[name] === undefined)
        return icons[def];
    return icons[name];
}

export {getIcon}