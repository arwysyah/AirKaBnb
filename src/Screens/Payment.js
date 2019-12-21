import RazorpayCheckout from 'react-native-razorpay';
import React, {Component} from 'react';
import {TouchableOpacity,StyleSheet, View, Text} from 'react-native';

import {Icon} from 'native-base';
import axios from 'axios';

class Payment extends Component {

   
  async componentDidMount() {
    const stays = await this.props.navigation.getParam('st');
    // console.log('STAY', stays);
    this.setState({
      detail: this.props.navigation.getParam('d'),
      isLoading: false,
      disabled: false,
      
    });
  }

    
  render() {

    const stays = this.props.navigation.getParam('st');
    console.log(stays,'stay')
    return (
        
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Information');
          }}>
          <View style={styles.menuinner}>
        <Text style={styles.innercontent}>{stays.price}</Text>
            <Icon type="SimpleLineIcons" name="user" style={styles.icon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.menuinner}>
        <Text style={styles.innercontent}></Text>
            <Icon
              type="FontAwesome5"
              name="clipboard-list"
              style={styles.iconlist}
            />
          </View>
        </TouchableOpacity>
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

        {/* <TouchableOpacity
          onPress={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_1DP5mmOlF5G5ag',
              amount: '500000000',
              name: 'kenzo',
              prefill: {
                email: 'kenzoymc@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software',
              },
              theme: {color: '#F37254'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                // handle success
                alert(`Success: ${data.razorpay_payment_id}`);
              })
              .catch(error => {
                // handle failure
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}>
          <Text>hello</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
export default Payment;

const styles = StyleSheet.create({
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
      color: '#02656b',
      fontWeight:'bold'
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
  