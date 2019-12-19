import React, { Component } from 'react';
import {View} from 'react-native'

import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
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
import AllStay from './src/Screens/AllStay'
import Search from './src/Screens/search'
import Wishlist from './src/Screens/Store'
import Information from './src/Screens/information'

const UserNavigator = createStackNavigator({
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
const AppNavigator= createStackNavigator({

 
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
  },Wishlist:{
    screen:Wishlist,
    navigationOptions:{
      header:null,
    }
  },
    DetailStay:{
      screen:DetailStay,
      navigationOptions:{
        header:null
      }
  },
  AllStay:{
    screen:AllStay,
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
  Information:{
    screen:Information,
    navigationOptions:{
      header:null
    }
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
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarVisible: null,
        header: null,
        footer:null,
        
      }
    
  },
});

const BottomNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: AppNavigator,
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
const switchScreen = createSwitchNavigator({
  Splash: SplashScreen,
  AuthScreen: UserNavigator,
  App: BottomNavigator,
});





const SwitchScreen =  createAppContainer(switchScreen);

class App extends Component {
  render() {
    return (
     <View>
        <SwitchScreen />
        </View>
    );
  }
}
export default SwitchScreen;


// class App extends React.Component{
//   render(){
//     return(
//       <View>
//         <Wishlist/>
//       </View>
//     )
//   }
// }
// export default App