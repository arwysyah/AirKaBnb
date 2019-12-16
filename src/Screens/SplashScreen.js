import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
  Image,
} from 'react-native';

// import {Database, Auth} from '../Config/fire';
import Logoloading from '../Assets/logoscreen.png';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      Auth.onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? 'App' : 'Auth');
      });
    }, 2500);
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor="black" />
        <View style={styles.container}>
          <Image source={Logoloading} style={{width: 120, height: 120}} />
          <Text style={{color: 'white', fontSize: 20}}>FORUM</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040112',
  },
});

export default SplashScreen;
