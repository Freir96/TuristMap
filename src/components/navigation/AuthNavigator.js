import { createStackNavigator } from 'react-navigation';
import Login from '../Login';
import Home from '../Home';

const AuthStack = createStackNavigator({ Login });

export default AuthStack;
