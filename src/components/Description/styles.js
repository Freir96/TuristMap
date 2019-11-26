import { StyleSheet } from 'react-native';
import Colors from '../../helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  element: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  horizontalContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flex: 1, flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
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
    color: Colors.black
  },
  headline: {
    backgroundColor: Colors.lightgray,
    width: "100%",
},
});

export default styles;
