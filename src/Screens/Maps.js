import React,{Component} from 'react'
import {View,StyleSheet,Text,Button} from 'react-native'
import MapView,{PROVIDER_GOOGLE, Marker} from 'react-native-maps'


class Maps extends Component{

    state={
    //     coordinates:[
    //     {name:'1',latitude : 2.7331968, longitude:125.4139568},
    //     {name:'2',latitude:-8.54877695,longitude:115.26505808316392},
    //     {name:'3',latitude:3.5897718,longitude:98.6613056}
    // ]
    }

    render(){
        return(
            <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
                latitude:37.78225,
                longitude:-122.4324,
                latitudeDelta:0.09,
                longitudeDelta:0.35
            }}>
                <Marker coordinate={{latitude:37.7825259,longitude:-122.4351431}}
                title={'this.location'}>
                    

                </Marker>
                          </MapView>
        )
    }
}

const styles= StyleSheet.create({
    map: {
        height:'100%'
      },
})


export default Maps