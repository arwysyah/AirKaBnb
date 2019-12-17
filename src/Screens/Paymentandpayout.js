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

export default class Paymentandpayout extends React.Component {
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
                fontSize: 27,
                fontWeight: 'bold',
                marginBottom: 30,
              }}>
              Payments and payouts
            </Text>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Payment And Payout</Text>
                <Icon
                  type="FontAwesome5"
                  name="money-bill-wave-alt"
                  style={styles.iconlist}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Credits and coupons</Text>
                <Icon
                  type="EvilIcons"
                  name="credit-card"
                  style={styles.iconnatif}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Currency</Text>
                <Icon
                  type="MaterialCommunityIcons"
                  name="currency-usd"
                  style={styles.iconnatif}
                />
              </View>
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
  profile: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  nameuser: {
    fontSize: 30,
  },
  viewprofile: {
    fontSize: 15,
    color: 'green',
  },
  topkey: {
    width: 70,
    height: 70,
    marginLeft: 30,
  },
  learnmore: {
    fontSize: 15,
    color: 'green',
    left: 20,
  },
  menuinner: {
    flexDirection: 'row',
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 2,
    height: 50,
    width: 320,
    marginBottom: 20,
  },
  menuinnersafety: {
    flexDirection: 'row',
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 2,
    height: 70,
    width: 320,
    marginBottom: 20,
  },
  innercontent: {
    fontSize: 16,
    // padding: 10,
  },
  logout: {
    fontSize: 16,
    color: '#79c8db',
  },
  icon: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    color: 'grey',
  },
  iconlist: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    color: 'grey',
  },
  iconnatif: {
    fontSize: 25,
    position: 'absolute',
    right: 10,
    color: 'grey',
  },
  iconpassport: {
    fontSize: 25,
    position: 'absolute',
    right: 10,
    color: 'grey',
  },
  iconlistyour: {
    fontSize: 25,
    position: 'absolute',
    right: 10,
    color: 'grey',
  },
  icongift: {
    fontSize: 19,
    position: 'absolute',
    right: 10,
    color: 'grey',
  },
  iconquestion: {
    fontSize: 24,
    position: 'absolute',
    right: 10,
    color: 'grey',
  },
});
