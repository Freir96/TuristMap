import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: Colors.white,
  },
  buttonContainer: {
    margin: 10,
    width: 130,
    //marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    //backgroundColor: Colors.primary,
  },
  buttonContainerLeft: {
    margin: 10,
    width: 130,
    //marginHorizontal: 20,
    marginLeft: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    //backgroundColor: Colors.primary,
  },
  buttonContainerRight: {
    margin: 10,
    width: 130,
    //marginHorizontal: 20,
    marginRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    //backgroundColor: Colors.primary,
  },
  buttonTitle: {
    fontFamily: 'Anodina-Light',
    fontSize: 22,
    color: colors.black,
  },
  buttonImage: {
    width: 65,
    height: 65,
  },
  button: {
    backgroundColor: colors.newYellow,
    //padding: 10,
    marginHorizontal: 30,
    borderRadius: 15,
  },
  buttonLeft: {
    backgroundColor: colors.newYellow,
    //padding: 10,
    marginLeft: 40,
    borderRadius: 15,
  },
  buttonRight: {
    backgroundColor: colors.newYellow,
    //padding: 10,
    marginRight: 10,
    borderRadius: 15,
  },
  dropdown: {
    backgroundColor: colors.primaryLight,
    width: 300,
    height: 32,
    borderRadius: 5,
  },
});

export default styles;
