import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {Left} from 'native-base';

export default class Saved extends React.Component {
  render() {
    return (
      <>
        <View style={styles.contentSaved}>
          <View style={styles.headerSaved}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginBottom: 30,
              }}>
              Saved
            </Text>
            <Text style={{color: 'grey', width: 300}}>
              Collect places to stay and things to do by tapping the heart icon.
            </Text>
          </View>
          <View
            style={
              {
                // justifyContent: 'center',
                // alignContent: 'center',
              }
            }>
            <Image
              source={require('../Assets/saved.jpg')}
              style={{
                width: 300,
                height: 300,
                alignSelf: 'center',
                position: 'absolute',
                top: 180,
              }}
            />
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
