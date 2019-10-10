import {
    StyleSheet
} from 'react-native'

import colors from '../../styles/colors';

const styles = StyleSheet.create({
    optionsModal: {
        position: 'absolute',
        top: 40,
        right: 0,
        alignSelf: 'flex-end',
        width: '70%',
        shadowColor: colors.grey,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    option: {
        padding: 15,
    },
    standardText: {
      color: colors.white
    },
})

export default styles