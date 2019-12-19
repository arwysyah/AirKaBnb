import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';


import {
  //   SafeAreaView,
  //   StyleSheet,
  //   ScrollView,
  Spinner,
  View,
  Text,
  Image,
  ToastAndroid,
  //   Image,
  TextInput,
  TouchableOpacity,
  //   StatusBar,
} from 'react-native';
import Iconz from 'react-native-vector-icons/FontAwesome5';
import {ScrollView} from 'react-native-gesture-handler';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      email: '',
      loginKey: false,
    };
  }
  async componentDidMount() {
    try {
      if (await AsyncStorage.getItem('jwt')) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('AuthScreen');
      }
    } catch (error) {
      console.log(error);
    }
  }

  loginUser() {
    const formData = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
    
      // .post(`http://192.168.100.155:9000/user/login`, formData)
      .post(`http://192.168.6.122:9000/user/login`, formData)
      .then(res => {
        console.log(
          'ini res, response,token',
          res,
          res.data.message,
          res.data.succes,
          res.data.token,
        );
console.log('form',formData)
        if (res.data.succes === 1) {
          AsyncStorage.setItem('jwt', res.data.token);
          this.setState({
            loginKey: true,
          })(ToastAndroid.show('Login Success', ToastAndroid.SHORT));
        } else {
          ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
        }
        console.log('async',AsyncStorage)
      })
      .catch(err => {
        console.log(err);
      });

    // console.log(formData);
    //fungsi login disini
  }

  render() {
    if (this.state.loginKey) {
      return this.props.navigation.navigate('Explore');
    }
    return (
      <ScrollView style={{backgroundColor:'#02656b'}}>
        <View style={{flex: 1 ,backgroundColor:'#02656b'}}>
          <View style={{height: 60,backgroundColor:'#02656b'}}></View>
          <View
            style={{
            
              height: 80,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'white'}}>
             AIRKABNB
            </Text>
            <Image
              source={require('../Assets/airbnb.jpg')}
              style={{height: 80, width: 80, tintColor: 'white',top:15}}
            />
          </View>
          <View
            style={{
              height: 60,
              alignItems: 'center',
            }}></View>
          <View style={{height: 40}} style={{marginHorizontal: 27}}>
            <Text style={{color: 'white'}}>Email</Text>
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
            <Text style={{color: 'white'}}>Password</Text>
            <View>
              <TextInput
                onChangeText={password => this.setState({password: password})}
                // value={dataPostLogin.password}
                placeholder={'input'}
                placeholder={''}
                secureTextEntry={true}
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
                style={{fontSize: 22, color: 'white', fontWeight: 'bold'}}>
                Sign In
              </Text>
              <TouchableOpacity onPress={this.loginUser.bind(this)}>
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
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Register');
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: ' Airbnb Cereal App',
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: ' Airbnb Cereal App',
                  fontWeight: 'bold',
                  color: 'white',
                  left: 20,
                }}>
                Forgot Password
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Login;
