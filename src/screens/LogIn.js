import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Icon,
  View,
  Button,
} from 'native-base';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  Platform,
  PermissionsAndroid,
} from 'react-native';
// import Home from './Home';
// import axios from 'axios';
import {ToastAndroid} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      isSecure: true,
    };
  }

  render() {
    return (
      <Container style={{width: 330}} style={styles.wrapper}>
       
        <View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Register', {
                itemId: 2,
                name: 'siska eee',
              })
            }>
      
            <Icon
              style={{
                width: 23,
                fontSize: 35,
                color: 'white',
                marginLeft: '6%',
                marginTop: '5%',
              }}
              name="arrow-back"
            />
  
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
 
          >
            <Text
              style={{
                fontSize: 15,
                marginLeft: '65%',
                fontWeight: 'bold',
                width: 100,
                marginTop: '-8%',
                color: 'white',
              }}>
              lupa kata sandi?
            </Text>
          </TouchableOpacity>
        </View>
        <Content>
          <Text style={styles.register}>Masuk</Text>
          <Form style={{marginLeft: 9}}>
            <Item floatingLabel style={{width: '90%'}}>
              <Label style={styles.email}>Alamat Email</Label>
              <Input

          
              />
            </Item>

            <Item floatingLabel style={{width: '90%', marginTop: '10%'}}>
              <Label style={styles.password}>Kata Sandi</Label>
              <Input
                secureTextEntry={this.state.isSecure}
      
                autoCapitalize="none"
              />
              <Icon
                onPress={() => this.setState({isSecure: !this.state.isSecure})}
                type="FontAwesome5"
                name={this.state.isSecure ? 'eye-slash' : 'eye'}
                style={{fontSize: 18, color: 'white'}}
              />
            </Item>
            <View style={{marginTop: 140}}>
              <TouchableOpacity

              >
                
                <Icon
                  style={{
                    width: 23,
                    fontSize: 35,
                    width: 45,
                    marginLeft: '83%',
                    marginTop: '25%',
                    color: 'white',
                  }}
                  name="arrow-forward"
                />
             
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
             
              ></TouchableOpacity>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#02656b',
  },
  name: {
    color: 'white',
  },
  email: {
    color: 'white',
  },
  password: {
    color: 'white',
  },
  register: {
    fontSize: 45,
    marginTop: 40,
    marginLeft: 20,
    fontFamily: 'bold',
    color: 'white',
  },
  signup: {
    marginLeft: 13,
    fontSize: 20,
    marginTop: 40,
    color: 'white',
  },
  readyaccount: {
    marginLeft: 13,
    fontSize: 12,
    marginTop: 50,
    textDecorationLine: 'underline',
    color: 'white',
  },
});
