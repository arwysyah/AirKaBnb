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

export default class Saved extends React.Component {
  render() {
    return (
      <View style={{justifyContent:'center'}}>
        <View style={{height:40}}></View>
        <View style={{height:200}}>
        <Text style={{fontSize:26,fontWeight:'bold',textAlign:'center'}}>Tersimpan</Text>
        </View>
        
        <View style={{marginLeft:20,width:300}}>
        <Text style={{textAlign:'center',fontSize:25}}>Tidak setiap hari menghadirkan petualangan,namun Anda bisa 
        merencanakan pengalaman Anda berikutnya. Ketuk icon favorit untuk menyimpan favorit</Text>
        </View>
       <View style={{justifyContent:'center'}}>
         <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Explore')}>
           <Text style={{textAlign:'center'}}>
             ayo cari
           </Text>
         </TouchableOpacity>
       </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    left:120,
    alignItems: 'center', 
    textAlign: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    // shadowColor:'black',
    backgroundColor: '#FF5A5F',
    borderRadius: 10,
    // shadowOpacity:100,
    borderTopColor: 'black',
    fontWeight:'bold',
    top:60
  },
})