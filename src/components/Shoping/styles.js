import colors from '../../styles/colors';

import {
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconStyle: {
    color: colors.white,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center', alignContent: 'center',
    borderRadius: 12,
  },
  infoContainer: {
    marginVertical: 5,
    flexDirection: 'row',
  },
  gradient: {
    //flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    width: 140,
    height: 40,
    borderRadius: 15,
  },
  title: {
    color: colors.darkish2, marginBottom: 5,
    fontFamily: 'Montserrat-SemiBold',
  },
  subtitle: {
    color: colors.primary, //marginBottom: 5,
    fontFamily: 'Montserrat-Regular'
  },
})