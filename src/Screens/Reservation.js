import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Button, Icon} from 'native-base';

export default class Reservation extends React.Component {
  render() {
    return (
      <>
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
        <View style={styles.contentSaved}>
          <View style={styles.headerSaved}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 30,
              }}>
              Reservation
            </Text>
            <Text style={{color: 'grey', width: 270}}>
              You dont't have any reservation yet. Tap "Start exploring" to plan
              your next trip
            </Text>
            <Image
              source={require('../Assets/reservation.jpg')}
              style={{
                width: 300,
                height: 300,
                alignSelf: 'center',
                position: 'absolute',
                top: 150,
                left: 0,
              }}
            />
            <TouchableOpacity style={{width: 150, marginTop: 350}}>
              <Button
                onPress={() => this.props.navigation.navigate('Explore')}
                bordered
                success>
                <Text style={{color: 'green', paddingLeft: 30}}>
                  Start exploring
                </Text>
              </Button>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contentSaved: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerSaved: {
    flexDirection: 'column',
    position: 'absolute',
    left: 20,
    top: 30,
    backgroundColor: 'white',
  },
});
