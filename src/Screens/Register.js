import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Axios from 'axios';
import {
  //   SafeAreaView,
    StyleSheet,
  //   ScrollView,
  Spinner,
  View,
  Text,
  //   Image,
  TextInput,
  ToastAndroid,  TouchableOpacity,
  //   StatusBar,
} from 'react-native';

import Iconz from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      username: '',
      address:'',
    };
  }

  registerUser() {
    const formData = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      address : this.state.address
    };

    Axios
    // .post(`http://192.168.100.155:9000/user/register`, formData)
    .post(`http://192.168.6.122:9000/user/register`, formData)
    .then(res => {
      console.log(
        'ini res, response,token',
        res,
        res.data.message,
        res.data.succes,
        res.data.token,);ToastAndroid.show("Register succes",ToastAndroid.SHORT)
        console.log('fom',formData)
    this.props.navigation.navigate('Login')
      })
      .catch(error=>{
          console.log(error)
      })
  }

  render() {
    const formData = {
      email: this.state.email,
      password: this.state.password,
      username: this.state.username,
      address : this.state.address
    };
    console.log(formData)
    
   
    return (
      <ScrollView style={{backgroundColor:'#02656b',height:"100%"}}>
        <View >
          <View style={{height: 60}}></View>
          <View
            style={{
             
              height: 80,
              alignItems: 'center',
              
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'white',
                textAlign: 'center',
              }}>
            AIRKABNB
            </Text>
          </View>
          <View
            style={{
              height: 10,
              alignItems: 'center',
            }}></View>

          <View style={{height: 40}} style={{marginHorizontal: 35}}>
            <Text style={styles.text} >Username</Text>
            <View >
              <TextInput
                onChangeText={username => this.setState({username: username})}
                // value={dataPostLogin.password}
                placeholder={'input'}
                placeholder={''}
                style={{
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 10,

                  height: 30, 
                  width: 284,
                }}
              />
            </View>
            <Text style={styles.text} >Email</Text>
            <View style={{justifyContent: 'center'}}>
              <TextInput
                onChangeText={email => this.setState({email: email})}
                // value={dataPostLogin.}
                style={{
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 10,

                  height: 30,
                  width: 284,
                }}
              />
            </View>

            <Text style={styles.text} >Password</Text>
            <View>
              <TextInput
                onChangeText={password => this.setState({password: password})}
                // value={dataPostLogin.password}
                placeholder={'input'}
                secureTextEntry={true}
                placeholder={''}
                style={{
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 10,

                  height: 30,
                  width: 284,
                }}
              />
            </View>
            <Text style={styles.text} >address</Text>
            <View>
              <TextInput
                onChangeText={address => this.setState({address: address})}
                // value={dataPostLogin.password}
                placeholder={'input'}
               
                placeholder={''}
                style={{
                  backgroundColor: '#E5E6EE',
                  borderWidth: 1,
                  borderRadius: 10,

                  height: 30,
                  width: 284,
                }}
              />
            </View>
            
          </View>
          <View style={{height: 40}}></View>
          <View style={{height: 80}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 30,
              }}>
              <Text
                style={{fontSize: 22,top:15, color: 'white', fontWeight: 'bold'}}>
                Register
              </Text>
              <TouchableOpacity onPress={this.registerUser.bind(this)}>
                <Iconz name={'arrow-circle-right'} size={48} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              
            }}>
           
            <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
              <Text
                style={styles.signIn      
                }>
                Sign In
                
              </Text>
              </TouchableOpacity>
            </View>
           
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Register;
const styles= StyleSheet.create({
  signIn:{
    fontSize: 20,
    fontFamily: ' Airbnb Cereal App',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'white'
  }
})