import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import Register from '../screens/Register';

const AuthStack = createStackNavigator(
  {
    LoggedOut: LoggedOut,
    Register: Register,

    LogIn: LogIn,
  },
  {
    initialRouteName: 'LoggedOut',
    headerMode: 'none',
  },
);

export default createAppContainer(AuthStack);
