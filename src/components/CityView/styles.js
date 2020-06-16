import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.white,
    width: '35%',
    height: 35,
    marginHorizontal: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  swipeButton: {
    color: colors.red,
    fontSize: 32,
    zIndex: 999,
  },
  iconContainer: {
    marginLeft: 10,
    marginTop: 20,
    //marginBottom: 10,
  },
  icon: {
    //marginLeft: 10,
    //marginTop: 10,
    marginBottom: 10,
  },
  iconFocus: {
    marginLeft: 10,
    marginTop: 10,
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
  swipeBox: {
    marginHorizontal: 20,
    borderRadius: 20,
  },
});

export default styles;
