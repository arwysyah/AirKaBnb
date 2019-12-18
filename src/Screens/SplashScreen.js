// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   ActivityIndicator,
//   Image,
// } from 'react-native';

// // import {Database, Auth} from '../Config/fire';
// import Logoloading from '../Assets/logoscreen.png';

// class SplashScreen extends React.Component {
//   componentDidMount() {
//     setTimeout(() => {
//       Auth.onAuthStateChanged(user => {
//         this.props.navigation.navigate(user ? 'App' : 'Auth');
//       });
//     }, 2500);
//   }

//   render() {
//     return (
//       <>
//         <StatusBar backgroundColor="black" />
//         <View style={styles.container}>
//           <Image source={Logoloading} style={{width: 120, height: 120}} />
//           <Text style={{color: 'white', fontSize: 20}}>FORUM</Text>
//         </View>
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#040112',
//   },
// });

// export default SplashScreen;
import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class SplashScreen extends Component {
  async componentDidMount() {
    {
      try {
        if (await AsyncStorage.getItem('jwt')) {
          setTimeout(() => {
            // go to Home page
            this.props.navigation.navigate('App');
          }, 3000);
        } else {
          setTimeout(() => {
            // go to Login page
            this.props.navigation.navigate('AuthScreen');
          }, 3000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#02656b'}}>
        <View
          style={{
            height: 200,
            alignContent: 'center',
            justifyContent: 'center',
            top: 150,
          }}>
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#FF5A5F" />
          </View>
          <Text style={styles.airkab}>
            AirkaBnB
          </Text>
          <Image source={require('../Assets/airbnb.jpg')} style={styles.imageair} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  imageair: {
    alignContent: 'center',
    height: 90,
    width: 90,
    left: 140,
    tintColor: '#FF5A5F',
    top:40,

    borderRadius: 15,
  },
  airkab:{
    color: '#FF5A5F', fontSize: 30, textAlign: 'center'
  }
});
