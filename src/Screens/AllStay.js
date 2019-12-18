import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

// import {getBook} from '../Redux/Actions/book';
// import {connect} from 'react-redux';

import {Badge, Icon} from 'native-base';
import axios from 'axios';
import Iconza from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
// import AsyncStorage from '@react-native-community/async-storage';

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      exp: [],
      stay: [],
    };
  }

  //   async refresh() {
  //     await axios.get('http://192.168.100.155:9000/stay').then(result => {
  //       console.log(result.data.response);
  //       this.setState({
  //         stay: result.data.response,
  //       });
  //     });
  //   }
  async componentDidMount() {
    axios.get('http://192.168.100.155:9000/stay').then(result => {
      console.log(result.data.response);
      this.setState({
        stay: result.data.response,
      });
      // console.log('stay',stay)
    });
  }

  render() {
    return (
      <View style={{color: 'black'}}>
        <View
          style={{
            height: 55,
            flexDirection: 'row',

            borderBottomColor: '#ccc5ba',
            borderBottomWidth: 1,
            backgroundColor: '#FF5A5F',
          }}>
          <TouchableOpacity   onPress={() => {
                this.props.navigation.goBack();
              }}>
            <Text
              style={{
                left: 11,
                fontWeight: 'bold',
                color: '#00A699',
                fontSize: 14,
                fontFamily: 'Airbnb Cerl App',
              }}>
              AirKabnb
            </Text>
            <Image
              source={require('../Assets/airbnb.jpg')}
              style={{height: 24, width: 24, tintColor: '#00A699', left: 20}}
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              height: 30,
              top: 10,
              left: 30,
              width: 210,
              borderRadius: 13,
              borderColor: 'black',
              
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Search')}
              transparent>
              <Icon
                style={{color: 'black', right: -180, top: 3}}
                name="search"
              />
              <View></View>
            </TouchableOpacity>
            <View></View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: 20}}>
            
          <View style={{height: 20}}></View>
          {this.state.stay.map((st, index) => (
           
            <View style={{paddingRight: 20, width: 300}}>
                 <TouchableOpacity  onPress={id => {
                  this.props.navigation.navigate('DetailStay', {
                    st: {...st},
                  });
                }}> 
              <Image
                style={{width: 320, height: 200, borderRadius: 5, top: 20}}
                source={{uri:st.image_url}}
              />
                </TouchableOpacity>
              <View style={{top: 5, flexDirection: 'row'}}>
                <Badge style={styles.Badge}>
                  <Text style={{textAlign: 'center'}}>{st.name}</Text>
                </Badge>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    top: 5,
                    color: 'brown',
                  }}>
                  {st.location.toUpperCase()}
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  Rp. {st.price} /malam
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                  {st.room_type}
                </Text>
                
              </View>
              
            </View>
           
          ))}
          
        </View>
        </ScrollView>
      </View>
    );
  }
}

// const styles = StyleSheet.create({});

// const mapStateToProps = state => {
//   return {
//     data: state.getBooks,
//   };
// };
// export default connect(mapStateToProps)(Home);
export default Explore;

const styles = StyleSheet.create({
  ViewData: {
    backgroundColor: 'white',
    shadowColor: 13,
    borderRadius: 12,
    height: 140,
    width: 130,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderWidth: 1,
  },
  ViewData1: {
    backgroundColor: 'white',
    shadowColor: 13,
    borderRadius: 12,
    height: 240,
    width: 220,
    flex: 1,
  },
  card: {
    shadowColor: 13,
    borderRadius: 12,
    height: 140,
    width: 130,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderWidth: 1,
  },
  experienceView: {
    marginTop: 260,

    flexDirection: 'row',

    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  commonText: {
    fontSize: 16,
  },
  Badge: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    width: 120,
    height: 20,
  },
  card1: {
    shadowColor: 13,
    borderRadius: 12,
    height: 160,
    width: 150,
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderWidth: 1,
  },
  textTitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
