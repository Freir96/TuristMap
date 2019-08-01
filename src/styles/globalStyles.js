import {StyleSheet,Dimensions} from 'react-native'
import colors from './colors'
const { width } = Dimensions.get('window');

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    paddedContainer: {
        padding: 10
    },
    fillAvailable: {
        flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        color: colors.primary,
    },
    centeredInput : {
        flex: 1, 
        alignSelf: 'stretch', 
        textAlign: 'center'
    },
    textInputView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 30,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 15
    },
    header: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    label: {
        padding: 5,
        backgroundColor: colors.light,
        color: colors.white
    },
    lightText: {
        color: colors.grey
    },
    standardText: {
        color: colors.primary
    },
    avatar: {
        height: 40,
        width: 40,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    avatarLarge: {
        height: 140,
        width: 140,
        borderRadius: 70
    },
    avatarText: {
        color: colors.white,
        fontWeight: 'bold'
    },
    avatarLargeText: {
        fontSize: 40
    },
    checkboxContainer: {
        backgroundColor: colors.white,
        borderColor: colors.white,
        width: 145,
        marginTop: 15,
        marginLeft: 0
    },
    listItem: {
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: colors.light,
        borderBottomWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,

    },
    onlineContainer: {
        backgroundColor: '#15b54b',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,

    },
    offlineText: { color: '#fff' }
});

export default globalStyles
