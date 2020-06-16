import { StyleSheet } from 'react-native';
//import Colors from '../../helpers/Colors';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkPrimary,
  },
  inputContainer: {
    flexDirection: 'row', borderColor: colors.darkish2,
    borderWidth: 1, marginVertical: 5, borderRadius: 5,
  },
  textContainer: {
    width: '100%',
    backgroundColor: colors.darkPrimary,
    alignSelf: 'center',
    //marginVertical: 5,
    borderRadius: 5,
    color: colors.white,
  },
  iconStyle: {
    color: colors.darkish2,
    marginHorizontal: 20,
  },
  iconContainer: {
    alignItems: 'center',
    width: 80,
  },
  mainText: {
    color: colors.darkish2,
    fontSize: 14,
    marginVertical: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  subText: {
    color: colors.darkPrimary,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.darkPrimary,
    marginLeft: 25,
    transform: [
      { rotate: '180deg' },
      //{ scaleY: 0.5 },
    ],
  },
});

export default styles;
