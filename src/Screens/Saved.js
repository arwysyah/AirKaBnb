import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Badge
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import decode from 'jwt-decode';
import axios from 'axios';
import {Icon, Button} from 'native-base';

class store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: [],
      istore:false
    };
  }
  async refresh() {
    const userToken = await AsyncStorage.getItem('jwt');
    const user = await decode(userToken);
    const id_user = user.result.id_user;
    axios
      // .get(`http://192.168.100.155:9000/wishlists/${id_user}`)
      .get(`http://192.168.6.122:9000/wishlists/${id_user}`)
      .then(result => {
        console.log('result',result)
        this.setState({
          store: result.data.response,
      
        });
      });
  }

  async componentDidMount() {
    const userToken = await AsyncStorage.getItem('jwt');
    const user = await decode(userToken);
    const id_user = user.result.id_user;
    this.setState({refresh: false});
    this.setState({
    
    })

    axios
      .get(`http://192.168.6.122:9000/wishlists/${id_user}`)
      .then(results => {
        console.log(results, 'res');
        this.setState({
          store: result.data.response,
       
        });
        console.log('result data', result.data.response);
        console.log('object', this.state.store);
      })
      .catch(err => {
        console.log(err);
      });

    
  }
  dateFormat = date_data => {
    // console.log(date_data);
    let arrDate = String(date_data)
      .slice(0, 10)
      .split('-')
      .reverse();
    switch (Number(arrDate[1])) {
      case 1:
        arrDate[1] = ' January ';
        break;
      case 2:
        arrDate[1] = ' February ';
        break;
      case 3:
        arrDate[1] = ' March ';
        break;
      case 4:
        arrDate[1] = ' April ';
        break;
      case 5:
        arrDate[1] = ' Mei ';
        break;
      case 6:
        arrDate[1] = ' June ';
        break;
      case 7:
        arrDate[1] = ' Jule ';
        break;
      case 8:
        arrDate[1] = ' August ';
        break;
      case 9:
        arrDate[1] = ' September ';
        break;
      case 10:
        arrDate[1] = ' October ';
        break;
      case 11:
        arrDate[1] = ' November ';
        break;
      case 12:
        arrDate[1] = ' December ';
        break;
    }
  };
  render() {
    const istore=this.state.istore
    console.log(this.state.store.borrow_at);
    return (
      



      <View>
      
        <View style={{backgroundColor: '#FF5A5F'}}>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Icon style={{color: 'black'}} name="arrow-back" />
            <Text
              style={{
                color: 'black',
                fontSize: 23,
                alignContent: 'center',
                left: -140,
                fontWeight: 'bold',
              }}>
              Saved
            </Text>
          </Button>
        </View>

        <ScrollView>
          <TouchableOpacity onPress={() => this.refresh()}>
            <Button
              transparent
              onPress={() => this.refresh()}
              style={{height: 30}}>
              <Icon style={{color: 'black', right: -170}} name="refresh" />
            </Button>
          </TouchableOpacity>
          {/* {istore == true ?  */}
          <View>
            {this.state.store.map((store, index) => (
              <View key={index}>
                <View>
                  <View
                    style={{
                      top: 20,
                      height: 250,

                      width: 200,
                      borderRadius: 15,

                      marginHorizontal: 40,
                    }}>
                    <Image
                      style={{height: 150, width: 230, borderRadius: 5}}
                      source={{uri: store.image_url}}
                    />
                   
                      <Text style={{fontSize:20,color:'brown'}}>{store.name}</Text>
                   
                    

                    <Text>{store.location}</Text>
                    <Text style={{fontSize: 16}}>{store.room_type}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          {/* :  */}
            {/* <Text>
              hello world
            </Text>
          } */}
        </ScrollView>
      </View>
    );
  }
}
export default store;

const styles = StyleSheet.create({
  button: {
    left: 5,
    alignItems: 'center',
    top: -70,
    textAlign: 'center',
    justifyContent: 'center',
    height: 35,
    width: 120,
    // shadowColor:'black',
    backgroundColor: 'yellow',
    borderRadius: 15,
    // shadowOpacity:100,
    borderTopColor: 'black',
    // shadowOffset:30
  },
});
