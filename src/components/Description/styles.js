import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    marginHorizontal: 40,
    padding: 20,
  },
  textContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center'
  },
  standardText: {
    color: Colors.white
  },
});

export default styles;
