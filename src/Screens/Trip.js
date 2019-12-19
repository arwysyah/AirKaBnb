import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

export default class Trip extends React.Component {
  render() {
    return (
      <View>
        <View style={{height: 220, justifyContent: 'center'}}></View>
        <Text style={{fontSize: 27, fontWeight: 'bold', textAlign: 'center'}}>
          Mulai Perjalanan mu{' '}
        </Text>
        <View style={{height: 40}}></View>
        <View style={{alignContent:'center',justifyContent:'center'}}>
          <TouchableOpacity style={styles.button3} onPress={()=>{
            this.props.navigation.navigate('Explore')
          }}>
            <Text>Ayo Cari</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button3: {
    left: 5,
    alignItems: 'center',
   left:90,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent:'center',
    height: 35,
    width: 160,
    // shadowColor:'black',
    backgroundColor: '#FF5A5F',
    borderRadius: 12,
    // shadowOpacity:100,
    borderTopColor: 'black',
    // shadowOffset:30
  },
});
