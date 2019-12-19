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
import decode from 'jwt-decode';
// import AsyncStorage from '@react-native-community/async-storage';


class Explore extends Component {
  constructor() {
    super();
    this.state = {
      exp: [],
      stay: [],
      name:''
    };
  }

  async refresh(){
    await  axios.get('http://192.168.100.155:9000/experience').then(result => {
      // console.log(result.data.response);
      this.setState({
        exp: result.data.response,
      });
    });
    console.log('asyncstorage', await AsyncStorage.getItem('jwt'));
      
  }
  async componentDidMount() {
    
    let data = await AsyncStorage.getItem('jwt')
   let profile= decode(data)
   this.setState({
     name:profile.result.username
   })
    try {
      axios
      // .get('http://192.168.100.155:9000/experience')
      .get('http://192.168.6.122:9000/experience')
      .then(result => {
        // console.log(result.data.response);
        this.setState({
          exp: result.data.response,
        });
      });
    } catch (error) {
      console.log(error.response.data);
    }

    axios
    // .get('http://192.168.100.155:9000/stay/limit')
    .get('http://192.168.6.122:9000/stay/limit')
    .then(result => {
      // console.log(result.data.response);
      this.setState({
        stay: result.data.response,
      });
      // console.log('stay',stay)
    });
  }

  render() {
    return (
      <View style={{color: 'black', flex: 1}}>
        <View
          style={{
            height: 55,
            flexDirection: 'row',

            borderBottomColor: '#ccc5ba',
            borderBottomWidth: 1,
            backgroundColor: '#FF5A5F',
          }}>
          <TouchableOpacity onPress={() => this.refresh()}>
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
              <View style={{}}></View>
            </TouchableOpacity>
            <View></View>
          </View>
        </View>
        <View style={{paddingLeft: 20}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{top: 40}}>
              <Text style={{fontSize: 40}}>
          Anda Ingin Dibantu menemukan apa {this.state.name}?
              </Text>
            </View>
            <View>
              <View style={{top: 120, height: 200}}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  {/* -----------genre mapp dari sini------------ */}

                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 5,
                      paddingRight: 10,
                      flex: 1,
                      borderRadius: 15,
                    }}>
                    <View style={styles.ViewData}>
                      <View>
                        <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate('AllStay')
                      }}>
                        <Image
                          source={require('../Assets/restaurant.jpg')}
                          style={{
                            height: 90,
                            width: 129,

                            borderTopRightRadius: 10,
                            borderTopLeftRadius: 10,
                          }}
                        />
                        </TouchableOpacity>
                      </View>
                      <Text
                        style={{
                          width: 100,
                          fontSize: 20,
                          // backgroundColor: '#d9d5d4',
                          position: 'absolute',
                          left: 10,
                          top: 100,
                          textAlign: 'center',
                        }}>
                        Stay
                      </Text>
                    </View>
                  </View>

                  <View style={styles.card}>
                    <View>
                      <TouchableOpacity >
                      <Image
                        source={require('../Assets/experiences.jpg')}
                        style={{
                          height: 90,
                          width: 129,

                          borderTopRightRadius: 10,
                          borderTopLeftRadius: 10,
                        }}
                      />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        width: 100,
                        fontSize: 20,
                        // backgroundColor: '#d9d5d4',
                        position: 'absolute',
                        left: 10,
                        top: 100,
                        textAlign: 'center',
                      }}>
                      Experience
                    </Text>
                  </View>
                </ScrollView>

                <View style={{marginLeft: 7, top: 41, height: 40, width: 240}}>
                  <Text style={styles.textTitle}>
                    Pengalaman Yang Dinilai Tinggi
                  </Text>
                  <Text>
                    Pesan aktivitas yang dipandu para tuan rumah lokal pada
                    perjalanan anda berikutnya
                  </Text>
                </View>
              </View>

              <View style={styles.experienceView}>
                {this.state.exp.map((d, index) => (
                  <View style={{width: 160}} key={index}>
                    <TouchableOpacity
                      onPress={id => {
                        this.props.navigation.navigate('Detail', {
                          d: {...d},
                        });
                      }}>
                      <Image
                        style={{height: 100, width: 145, borderRadius: 5}}
                        source={{uri: d.image_url}}
                      />
                      <Text style={{fontSize: 12, color: 'brown'}}>
                        {d.location.toUpperCase()}
                      </Text>
                      <Text style={styles.commonText}>
                        {d.packet_name.toLowerCase()}
                      </Text>
                      <Text style={{fontSize: 16, color: 'grey'}}>
                        Rp. {d.price} per orang
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}

                <View style={{top: 40, paddingLeft: 10, alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 15,
                      alignItems: 'center',
                      color: 'grey',
                    }}></Text>
                </View>
              </View>
            </View>
            {this.state.stay.map((st, index) => (
              <TouchableOpacity
                onPress={id => {
                  this.props.navigation.navigate('DetailStay', {
                    st: {...st},
                  });
                }}>
                <View style={{height: 290}} key={index}>
                  <View style={{borderRadius: 5}}>
                    <Image
                      source={{uri: st.image_url}}
                      style={{height: 140, width: 230, borderRadius: 5}}
                    />
                  </View>
                  <View style={{top: 5, flexDirection: 'row'}}>
                    <Badge style={styles.Badge}>
                      <Text style={{textAlign: 'center'}}>{st.name}</Text>
                    </Badge>
                    <Text style={{left: 15, color: 'grey'}}>{st.location}</Text>
                  </View>
                  <View>
                    <Text style={{top: 10, fontSize: 17}}>
                      {st.name.toUpperCase()}
                    </Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold', top: 10}}>
                      Rp. {st.price} /malam
                    </Text>
                    <Text style={{fontSize: 15, fontWeight: 'bold', top: 10}}>
                     {st.room_type} 
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
            <View>
              <View>
                <Text style={styles.textTitle}>
                  Tempat Menginap Untuk Perjalan Anda
                </Text>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {this.state.stay.map((st, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      marginLeft: 5,
                      paddingRight: 20,
                      flex: 1,
                      borderRadius: 15,
                      height: 280,
                    }}>
                    <View style={styles.ViewData1}>
                      <TouchableOpacity
                        onPress={id => {
                          this.props.navigation.navigate('DetailStay', {
                            st: {...st},
                          });
                        }}>
                        <View>
                          <Image
                            source={{uri: st.image_url}}
                            style={{
                              height: 140,
                              width: 210,
                              borderRadius: 5,
                            }}
                          />
                        </View>
                        <View style={{top: 5, flexDirection: 'row'}}>
                          <Badge style={styles.Badge}>
                            <Text>{st.name}</Text>
                          </Badge>
                          <Text style={{left: 5, color: 'grey'}}>
                            {st.location}
                          </Text>
                        </View>
                        <View>
                          <Text style={{top: 10, fontSize: 17}}>
                            {st.room_type}
                          </Text>
                          <Text
                            style={{fontSize: 17, fontWeight: 'bold', top: 10}}>
                            Rp.{st.price} /malam
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}

                {/* -----------genre mapp sampai sini------------ */}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {/* <Navbar changePage={() => this.props.navigation.navigate('UserProfile')}/> */}
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
    width: 145,
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
