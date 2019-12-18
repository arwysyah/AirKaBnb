import React, { Component } from 'react';
import {View} from 'react-native'
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
import Detail from './src/Screens/Detail'
import DetailStay from './src/Screens/DetailStay'
import Maps from './src/Screens/Maps'



const AppStack = createStackNavigator({

// Register: {
//   screen: Register,
//   navigationOptions: {
//     tabBarVisible: false,
//     header: null,
//   },
// },
//   Login: {
//     screen: Login,
//     navigationOptions: {
//       header: null,
//       tabBarVisible: false,
//       header: null,
//     },
//     },
  
  Explore: {
    screen: Explore,
    navigationOptions: {
      header: null,
    },
  },
  Detail:{
    screen:Detail,
    navigationOptions:{
      header:null
    }
  },
    DetailStay:{
      screen:DetailStay,
      navigationOptions:{
        header:null
      }
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
  Saved: {
    screen: Saved,
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
        tabBarLabel: 'Trip',
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
        borderTopColor:'#ccc5ba',
        borderTopWidth:1
      },
    },
  },
);
export default createAppContainer(
  createSwitchNavigator(
    {
      Splashscreen: SplashScreen,
      // AuthLoading: Authloadingscreen,
      App: BottomNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Splashscreen',
      headerMode: 'none',
    },
  ),
);

// class App extends React.Component{
//   render(){
//     return(
//       <View>
//         <Login/>
//       </View>
//     )
//   }
// }
// export default App