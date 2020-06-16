import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 40,
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: colors.darkish2,
    marginVertical: 5,
  },
  subText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: colors.primary,
    marginVertical: 5,
  },
});

export default styles;
