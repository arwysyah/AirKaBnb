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

export default class Inbox extends React.Component {
  render() {
    return (
      <>
        <View style={styles.contentInbox}>
          <View style={styles.headerInbox}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Inbox
            </Text>
            <Text style={{color: 'grey'}}>
              Messages from your host will appear here.
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
              source={require('../Assets/inbox.jpg')}
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
  contentInbox: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerInbox: {
    flexDirection: 'column',
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'white',
  },
});
