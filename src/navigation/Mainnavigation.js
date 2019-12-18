import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import Register from '../screens/Register';
import TabNavigation from '../navigation/TabNavigation'

const AuthStack = createStackNavigator(
  {
    LoggedOut: LoggedOut,
    TabNavigation: {
      screen: TabNavigation,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
    Register: Register,

    LogIn: LogIn,
  },
  {
    initialRouteName: 'LoggedOut',
    headerMode: 'none',
  },
);

export default createAppContainer(AuthStack);
