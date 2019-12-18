import React, {Component} from 'react';
import {Icon, Button} from 'native-base';
import {View, Text, StyleSheet, Image, ScrollView,Dimensions} from 'react-native';
import Iconz from 'react-native-vector-icons/MaterialIcons';
import MapView,{PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Detail extends Component {
  async componentDidMount() {
    this.setState({
      detail: this.props.navigation.getParam('d'),
      isLoading: false,
      disabled: false,
    });
  }
  render() {
    const detail = this.props.navigation.getParam('d');
    console.log('detail params', detail);
  
    return (
        <View>
            <View style={{backgroundColor:'transparent'}}>
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
            <Image source={{uri: detail.image_url}} style={styles.imageUrl} />
          </View>
          <View style={styles.main}>
            <View style={{top: 30, width: 200}}>
              <Text
                style={{color: '#36281a', fontSize: 26, fontWeight: 'bold'}}>
                {detail.name}
              </Text>
            </View>
            <View style={styles.space}></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#36281a', fontSize: 16}}>
                {detail.location} {'\n'} owner {detail.owner}
              </Text>

              <Image
                source={require('../Assets/experiences.jpg')}
                style={styles.OwnerImage}
              />
            </View>
            <View style={{height: 400}}>
              <View style={{flexDirection: 'row'}}>
                <Iconz style={{color: 'black'}} name="home" size={23} />
                <Text style={{left: 20, top: 3}}>hello world</Text>
              </View>
              <View>
                <Text style={{left: 42}}>hello</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Iconz style={{color: 'black'}} name="location-on" size={23} />
                <Text style={{left: 20}}>
                  hello world , i wanna be millionare
                </Text>
              
               
              </View>
              <View>
                <Text style={{left: 42}}>hello</Text>
              </View>
            </View>
          </View>
          
        </View>
        <View style={{height: 500}}>
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={{
                latitude: detail.latitude,
                longitude: detail.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}>
              <Marker
                coordinate={{
                  latitude: detail.latitude,
                  longitude: detail.longitude,
                }}
                title={detail.name}>
                <Callout style={{height: 120}}>
                  <Text>{detail.owner}</Text>
                  <Text>{detail.name}</Text>
                  <Image style={styles.imaps} source={{uri: detail.image_url}} />
                </Callout>
              </Marker>
            </MapView>
          </View>
      </ScrollView>
      </View>
    );
  }
}
export default Detail;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 20,
  },
  imageUrl:{
width:360,height:240
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
  }, map: {
    height: 400,
  },
  imaps: {
    height: 80,
    width: 80,
    marginTop: 10,
    left: 20,
  },
});
