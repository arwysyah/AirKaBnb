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

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      isSecure: true,
    };
  }

  //   insertUser = () => {
  //     const userData = {
  //       username: this.state.username,

  //       email: this.state.email,

  //       password: this.state.password,
  //     };
  //     axios
  //       .post('http://192.168.6.156:7000/library/register', userData)
  //       .then(response => {
  //         console.log('Registered');
  //         this.props.navigation.navigate('Login');
  //         ToastAndroid.showWithGravity(
  //           'Saved, your account was successfully created',
  //           ToastAndroid.SHORT,
  //           ToastAndroid.CENTER,
  //         );
  //       })
  //       .catch(error => {
  //         // console.log('error');

  //         ToastAndroid.showWithGravityAndOffset(
  //           'your fail register',
  //           ToastAndroid.LONG,
  //           ToastAndroid.BOTTOM,
  //           25,
  //           50,
  //         );
  //         console.error(error.response.data);
  //       });
  //   };
  // onSubmit() {
  //   this.insertUser();
  // }
  render() {
    return (
      <Container style={{width: 330}} style={styles.wrapper}>
        {/* <ImageBackground style={styles.wrapper}></ImageBackground> */}

        <Content>
          <Text style={styles.register}>Register</Text>
          <Form style={{marginLeft: 9}}>
            <Item floatingLabel style={{width: '90%'}}>
              <Label style={styles.name}>Username</Label>
              <Input
              //   onChangeText={username => this.setState({username})}
              />
            </Item>

            <Item floatingLabel style={{width: '90%'}}>
              <Label style={styles.email}>Email</Label>
              <Input
              //   onChangeText={email => this.setState({email})}
              />
            </Item>

            <Item floatingLabel style={{width: '90%'}}>
              <Label style={styles.password}>Password</Label>
              <Input
                secureTextEntry={this.state.isSecure}
                // onChangeText={password => this.setState({password})}
                autoCapitalize="none"
              />
              <Icon
                onPress={() => this.setState({isSecure: !this.state.isSecure})}
                type="FontAwesome5"
                name={this.state.isSecure ? 'eye-slash' : 'eye'}
                style={{fontSize: 18, color: 'white'}}
              />
            </Item>
            <View>
              <TouchableOpacity
                // onPress={() =>
                //   this.props.navigation.navigate('Login', {
                //     itemId: 2,
                //     name: 'siska eee',
                //   })
                // }
                style={{
                  width: 45,
                  marginLeft: '84%',
                  marginTop: '30%',
                }}
                // onPress={() => this.insertUser()}
              >
                {/* <Button
                  // onPress={() => this.insertUser.bind(this)}
                  // onPress={this.onSubmit.bind(this)}
                  rounded
                  dark
                  style={{width: 45, marginLeft: '80%', marginTop: '30%'}}> */}
                <Icon
                  style={{width: 23, fontSize: 35, color: 'white'}}
                  name="arrow-forward"
                />
                {/* </Button> */}
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('LogIn', {
                    itemId: 2,
                    name: 'siska eee',
                  })
                }>
                <Text style={styles.readyaccount}>
                  Already have an account?
                </Text>
                {/* <Text
                  style={{
                    fontSize: 12,
                    marginLeft: 240,
                    marginTop: -10,
                  }}>
                  Forgot Password
                </Text> */}
              </TouchableOpacity>
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
