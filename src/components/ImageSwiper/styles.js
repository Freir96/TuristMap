import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '100%',
  },
  buttonContainer: {
    backgroundColor: 'transparent', flexDirection: 'row',
    position: 'absolute', top: -10, left: 0, //flex: 1,
    paddingHorizontal: 10, //paddingVertical: 10,
    justifyContent: 'space-between', alignItems: 'center',
  },
  button: {
    //backgroundColor: colors.white,
    //width: '35%',
    height: 35,
    marginHorizontal: 10,
    alignItems: 'center',
    textAlignVertical: 'center',
    marginVertical: 10,
    fontSize: 37,
    zIndex: 999,
    color: colors.primary,
    //position: 'absolute',
  },
  swipeButton: {
    color: colors.primary,
    position: 'absolute',
    top: 0,
    bottom: 0,
    fontSize: 56,
  },
  navText: {
    fontFamily: 'Montserrat-Regular',
    color: colors.primary,
  },
  textContainer: {
    //position: 'absolute',
    top: 1,
    left: 15,
  },
  navItemStyle: {
    borderBottomColor: colors.whiteSmoke,
    marginRight: 15,
    fontSize: 16,
    color: colors.black,
    padding: 10
  },
  itemIcon: {
    position: 'relative',
    top: 0,
    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
  },
  navSectionStyle: {
    flexDirection: 'row',
    //marginTop: 10,
    height: 50,
    borderBottomColor: colors.lightgray,
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    marginHorizontal: 40,
    padding: 20,
  },
});

export default styles;
