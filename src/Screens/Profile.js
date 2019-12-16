import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
// import {Icon} from 'native-base';
export default class Profile extends React.Component {
  render() {
    return (
      <>
        <View
          style={{
            backgroundColor: 'white',
            height: 120,
            borderBottomWidth: 1,
            borderBottomColor: '#dddddd',
          }}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: 'white',
              marginHorizontal: 20,
              shadowOffset: {width: 0, height: 0},
              shadowColor: 'black',
              shadowOpacity: 0.2,
            }}>
            <Image
              source={require('../Assets/user.png')}
              style={styles.profile}
            />
            <Text style={styles.nameuser}>Wahyu</Text>
            <Text>Test</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  nameuser: {
    fontSize: 30,
  },
});
