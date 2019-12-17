import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import SplashScreen from './src/Screens/SplashScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Trip from './src/Screens/Trip';
import Saved from './src/Screens/Saved';
import Profile from './src/Screens/Profile';
import Inbox from './src/Screens/Inbox';
import Explore from './src/Screens/Explore';
import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import {Icon} from 'native-base';
import {Image} from 'react-native';
import logoAirbnb from './src/Assets/airbnb.jpg';
import PersonalInformation from './src/Screens/PersonalInformation';
import Reservation from './src/Screens/Reservation';
import Paymentandpayout from './src/Screens/Paymentandpayout';
const AppStack = createStackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      header: null,
    },
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
  PersonalInformation: {
    screen: PersonalInformation,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
    },
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      header: null,
    },
  },
  Reservation: {
    screen: Reservation,
    navigationOptions: {
      header: null,
    },
  },
  Paymentandpayout: {
    screen: Paymentandpayout,
    navigationOptions: {
      header: null,
    },
  },
  Trip: {
    screen: Trip,
    navigationOptions: {
      header: null,
    },
  },
});

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      tabBarVisible: false,
      header: null,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      tabBarVisible: false,
      header: null,
    },
  },
});
const BottomNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: AppStack,
      navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="EvilIcons"
            name="search"
            style={{color: tintColor, fontSize: 30}}
          />
        ),
      },
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'Saved',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="EvilIcons"
            name="heart"
            style={{color: tintColor, fontSize: 30}}
          />
        ),
      },
    },
    Trip: {
      screen: Trip,
      navigationOptions: {
        tabBarLabel: 'Trips',
        tabBarIcon: ({tintColor}) => (
          <Image
            source={logoAirbnb}
            style={{height: 24, width: 24, tintColor: tintColor}}
          />
        ),
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="Feather"
            name="message-square"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="SimpleLineIcons"
            name="user"
            style={{color: tintColor, fontSize: 23}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: '#757575',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);
const switchScreen = createSwitchNavigator({
  App: BottomNavigator,
  Auth: AuthStack,
});
export default createAppContainer(switchScreen);
