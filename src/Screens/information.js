import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Fab,
  DatePicker,
  Picker,
} from 'native-base';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import decode from 'jwt-decode'

export default class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      username:"",
      email:'',
      address:""
    };
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }

async componentDidMount(){
    let data = await AsyncStorage.getItem('jwt');
    console.log(decode(data));
    const profile = decode(data);  //kita masukkin tuh token kedalam variabel profile
    this.setState({
      username:profile.result.username,
      email:profile.result.email,
      address:profile.result.address
    })
    // console.log(username)
}


  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  alertHandler = () => {
    Alert.alert('TEST SAVE');
  };
  
  render() {
    return (
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon
              type="Ionicons"
              name="ios-arrow-round-back"
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 35,
              }}
            />
          </Button>
          <TouchableOpacity onPress={this.alertHandler}>
            <View style={{marginLeft: '80%', marginTop: '4%'}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, marginLeft: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Edit personal Info
          </Text>
        </View>
        <View style={{width: '90%', marginLeft: 10}}>
          <Form>
          <Text style={{marginLeft: 15,top:10, fontSize: 15,fontWeight:'bold'}}>Name</Text>
            <Item floatingLabel last style={{marginBottom: 30}}>
            <Label>{this.state.username}</Label>
              <Input />
            </Item>
            <Text style={{marginLeft: 15, fontSize: 15,fontWeight:'bold'}}>Email</Text>
            <Item floatingLabel last style={{marginTop: -10}}>
            <Label>{this.state.email}</Label>
              <Input />
            </Item>
           
            <Text style={{marginLeft:15, fontSize: 15,fontWeight:'bold'}}>Address</Text>
           
            <Item floatingLabel last style={{marginTop: -10}}>
            <Label>{this.state.address}</Label>
              <Input />
            </Item>
          </Form>
        </View>
      </ScrollView>
    );
  }
}