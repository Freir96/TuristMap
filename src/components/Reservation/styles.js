import colors from '../../styles/colors';

import {
    StyleSheet
} from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1
  },
  textContainer: {
    marginVertical: 5,
    borderColor: colors.darkish2,
    borderRadius: 10,
    borderWidth: 1,
  },
  title: {
    color: colors.primary,
    fontFamily: 'OpenSans-Bold',
    fontSize: 14,
    marginTop: 20,
  },
  text: {
    color: colors.primary,
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    marginTop: 10,
  },
  button: {
    borderColor: colors.darkish2,
    backgroundColor: colors.primaryLight2,
    alignItems: 'center',
    borderRadius: 5,
    width: 30,
    height: 30,
    //marginHorizontal: 15,
  },
  buttonText: {
    fontSize: 22,
  },
  counter: {
    marginHorizontal: 20,
  },
  counterText: {
    //marginHorizontal: 20,
    textAlignVertical: 'center',
    marginTop: 5,
  },
  errorText: {
    color: colors.red,
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    marginTop: 10,
  },
  gradient: {
    //flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    width: 120,
    height: 40,
    borderRadius: 20,
  },

})