import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    textStyle: {
        fontSize: 14,
        color: colors.darkish2,
        fontFamily: 'Montserrat-Regular',//SemiBold
    },
    titleStyle: {
        fontSize: 22,
        color: colors.primary,
        fontFamily: 'Montserrat-SemiBold',
    },
    triangle: {
        marginTop: 5,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.darkish2,
    },
    triangleDown: {
        marginTop: 5,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: colors.darkish2,
        transform: [
            { rotate: '180deg' }
        ]
    }
})

export default styles;