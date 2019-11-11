import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
//import TextStyles from '../helpers/TextStyles';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderWidth: 1,
        width: 150,
        height: 150,
        margin: 10,
        padding: 5,
        borderRadius: 50,
    },
  });

export default class MenuTile extends React.Component {
    render() {
        return(
            <TouchableOpacity
                //{...props}
                style={[styles.button]}
            >
                <Text
                //style={[TextStyles.fieldTitle, props.textStyle]}
                >
                    
                </Text>
            </TouchableOpacity>
        )
    }
}

//return MenuTile;