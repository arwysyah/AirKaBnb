import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,
  ToastAndroid
} from 'react-native';
import Iconz from 'react-native-vector-icons/MaterialIcons';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Iconsa from 'react-native-vector-icons/AntDesign'
import Axios from 'axios'
import decode from 'jwt-decode'
import AsyncStorage from '@react-native-community/async-storage'


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class DetailStay extends Component {
  state = {
    latitude: 0,
    longitude: 0,
  };

  async componentDidMount() {
    const stays = await this.props.navigation.getParam('st');
    // console.log('STAY', stays);
    this.setState({
      detail: this.props.navigation.getParam('d'),
      isLoading: false,
      disabled: false,
    });
  }
  handleStore(){
    Alert.alert('Confirm Store', 'Do You Like This Place?', [
      {
        text: 'Cancel',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            let data = await AsyncStorage.getItem('jwt');
            console.log(decode(data));
            const profile = decode(data); 
            console.log(profile,'profile') 
            const id_user= profile.result.id_user
            console.log('user id', profile.result.id_user);
            // console.log('resu',user.result) //ini penting
            const detail = this.props.navigation.getParam('st');
            const id_room = detail.id_room;
         
            // console.log('data',data.id,idBook) //navigator
            let formData = {
              id_user: profile.result.id_user,
              id_room: id_room,
            };
            console.log('user',profile.result.id_user)
            console.log('id room',detail.id_room)
            console.log('form',formData)
            console.log(id_user,id_room, 'data')
            // console.log('tipe', typeof formData);
            await Axios
            // .post('http://192.168.100.155:9000/wishlist', formData);
            .post('http://192.168.6.122:9000/wishlist', formData);
            console.log(formData,'fo')
            console.log('succes');
            ToastAndroid.show('it saved in you store', ToastAndroid.SHORT);
            // await this.props.dispatch(addBorrow(userId, userToken, formData))
            // this.checkBorrowed()
          } catch (error) {
            console.log('error', error);
          }
        },
        style: 'default',
      },
    ]);
  
  }
  render() {
    const stays = this.props.navigation.getParam('st');

    return (
      <View>
      <View>
        <View style={{backgroundColor: 'transparent'}}>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Icon style={{color: 'black'}} name="arrow-back" />
            <Text
              style={{
                color: 'white',
                fontSize: 23,
                alignContent: 'center',
                left: -140,
                fontWeight: 'bold',
              }}>
              Detail
            </Text>
          </Button>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={{height: 240, width: 360}}>
             
              <Image source={{uri: stays.image_url}} style={styles.imageUrl} />
               <View style={{backgroundColor:"white",width:30,top:-237,left:325,borderRadius:6}}>
                 <TouchableOpacity onPress={this.handleStore.bind(this)}>
            <Iconsa style={{color: 'red'}} name="like1" size={25} />
            </TouchableOpacity>
            </View>
            </View>
            <View style={styles.main}>
              <View style={{top: 30, width: 200}}>
                <Text
                  style={{color: '#36281a', fontSize: 26, fontWeight: 'bold'}}>
                  {stays.name}
                </Text>
              </View>
              <View style={styles.space}></View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#36281a', fontSize: 16}}>
                  {stays.location} {'\n'} owner {stays.owner}
                </Text>

                <Image
                  source={require('../Assets/experiences.jpg')}
                  style={styles.OwnerImage}
                />
              </View>
              <View style={{height: 500}}>
                <View style={{flexDirection: 'row'}}>
                  <Iconz style={{color: 'black'}} name="home" size={23} />
                  <Text style={{left: 20, top: 3, fontWeight: 'bold'}}>
                    Kamar Tamu
                  </Text>
                </View>
                <View>
                  <Text style={{left: 42}}>
                    tamu . 1 Kamar tidur. 1 tempat tidur. 1 kamar mandi
                  </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Iconz
                    style={{color: 'black'}}
                    name="location-on"
                    size={23}
                  />
                  <Text style={{left: 20, fontWeight: 'bold', top: 5}}>
                    Lokasi Luar Biasa
                  </Text>
                </View>
                <View>
                  <Text style={{left: 42}}>
                    95% tamu baru baru ini memberikan 5 bintang untuk process
                    check in
                  </Text>
                </View>
                <View style={{top: 20}}>
                  <Text style={{fontSize: 23}}> Description</Text>
                  <Text>{stays.description}</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 500,marginHorizontal:20}}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: stays.latitude,
                longitude: stays.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}>
              <Marker
                coordinate={{
                  latitude: stays.latitude,
                  longitude: stays.longitude,
                }}
                title={stays.name}>
                <Callout style={{height: 120}}>
                  <Text>{stays.owner}</Text>
                  <Text>{stays.name}</Text>
                  <Image style={styles.imaps} source={{uri: stays.image_url}} />
                </Callout>
              </Marker>
            </MapView>
          </View>
        </ScrollView>
        <View style={{backgroundColor:'black',height:100 ,bottom:80}}>
      <TouchableOpacity style={styles.button}>
        <Text>Pesan</Text>
      </TouchableOpacity>
    </View>
         
        
      </View>
      
    </View>
    );
  }
}
export default DetailStay;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
  },
  imageUrl: {
    width: 360,
    height: 240,
  },
  space: {
    height: 40,
  },
  OwnerImage: {
    height: 60,
    width: 60,
    borderRadius: 40,
    right: -50,
    top: -10,
  },
  map: {
    height: 400,
  },
  imaps: {
    height: 80,
    width: 80,
    marginTop: 10,
    left: 20,
  },
  button: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    height: 35,
    width: 100,
    // shadowColor:'black',
    backgroundColor: '#FF5A5F',
    borderRadius: 15,
    // shadowOpacity:100,
    borderTopColor: 'black',
    fontWeight: 'bold',
  },
});
