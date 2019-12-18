import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Icon} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage'
import decode from 'jwt-decode'
// import {Icon} from 'native-base';
export default class Profile extends React.Component {
state={
  username:'',
  email:'',
  address:'',
  data:[]
}

async componentDidMount(){
  let data = await AsyncStorage.getItem('jwt');
  console.log(decode(data));
  const profile = decode(data);  //kita masukkin tuh token kedalam variabel profile
  this.setState({
    username:profile.result.username,
    email:profile.result.email,
    address:profile.result.address
  })
  
}
 async handleLogout(){
  Alert.alert(
    'Logout',
    'Are You Sure Want to Logout ?',
    [
     
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: async() => {
        try {
    
          await AsyncStorage.removeItem('jwt')
          this.props.navigation.navigate('Login')
        } catch (err) {
          console.log(`The error is: ${err}`)
        }

      }},
    ],
    {cancelable: false},
  )
 
 
}

  render() {
    // let token = AsyncStorage.jwt  
    // console.log('local',AsyncStorage,token)
    // console.log('yang didecode',decode())
    

    return (
      <>
        <ScrollView>
          <View
            style={{
              backgroundColor: 'white',
              height: 120,
              borderBottomWidth: 1,
              borderBottomColor: '#dddddd',
              marginBottom: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: 'white',
                marginHorizontal: 20,
                shadowOffset: {width: 0, height: 0},
                shadowColor: 'black',
                shadowOpacity: 0.2,
              }}>
              <Image
                source={require('../Assets/user.png')}
                style={styles.profile}
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: 15,
                }}>
  <Text style={styles.nameuser}>{this.state.username}</Text>
                <TouchableOpacity>
                  <Text style={styles.viewprofile}>View Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.2,
              borderBottomWidth: 1,
              borderBottomColor: '#e3e3e3',
              height: 100,
              marginBottom: 20,
            }}>
            <Image
              source={require('../Assets/key.png')}
              style={styles.topkey}
            />
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  width: 210,
                  left: 20,
                }}>
                Earn up to $887 per month hosting your name
              </Text>
              <TouchableOpacity>
                <Text style={styles.learnmore}>Learn More</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'column',
              left: 20,
            }}>
            <Text style={{color: '#c4c4c4', marginBottom: 10}}>
              ACCOUNT SETTINGS
            </Text>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Personal Information</Text>
                <Icon type="SimpleLineIcons" name="user" style={styles.icon} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Reservation</Text>
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
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Notifications</Text>
                <Icon
                  type="MaterialIcons"
                  name="notifications-none"
                  style={styles.iconnatif}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Travel for work</Text>
                <Icon
                  type="MaterialCommunityIcons"
                  name="passport"
                  style={styles.iconpassport}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              left: 20,
            }}>
            <Text style={{color: '#c4c4c4', marginBottom: 10}}>HOSTING</Text>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>List your space</Text>
                <Icon
                  type="MaterialCommunityIcons"
                  name="home-plus"
                  style={styles.iconlistyour}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Host an experience</Text>
                <Icon
                  type="MaterialIcons"
                  name="card-travel"
                  style={styles.iconlist}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              left: 20,
            }}>
            <Text style={{color: '#c4c4c4', marginBottom: 10}}>
              REFERALS & CREDITS
            </Text>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.innercontent}>Invite Friend</Text>
                  <Text style={{fontSize: 12}}>
                    Get up to $24 off your next trip
                  </Text>
                </View>
                <Icon type="Feather" name="gift" style={styles.icongift} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.innercontent}>Refer a host</Text>
                  <Text style={{fontSize: 12}}>
                    Get up to $15 for referring hosts
                  </Text>
                </View>
                <Icon type="Feather" name="gift" style={styles.icongift} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              left: 20,
            }}>
            <Text style={{color: '#c4c4c4', marginBottom: 10}}>SUPPORT</Text>
            <TouchableOpacity>
              <View style={styles.menuinnersafety}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={styles.innercontent}>Safety Center</Text>
                  <Text style={{fontSize: 12, width: 200}}>
                    Get the support,tools,and Information you need to be safe
                  </Text>
                </View>
                <Icon
                  type="MaterialCommunityIcons"
                  name="shield-outline"
                  style={styles.icongift}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Get help</Text>

                <Icon
                  type="AntDesign"
                  name="question"
                  style={styles.iconquestion}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'column',
              left: 20,
            }}>
            <Text style={{color: '#c4c4c4', marginBottom: 10}}>LEGAL</Text>
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Term of Service</Text>

                <Icon
                  type="MaterialCommunityIcons"
                  name="file-document-outline"
                  style={styles.icongift}
                />
              </View>
            </TouchableOpacity>
            
              <View style={styles.menuinner}>
              <TouchableOpacity onPress={()=>{this.handleLogout()}}>
                <Text style={styles.logout}>LOGOUT</Text>
                </TouchableOpacity>
              </View>
           
            <TouchableOpacity>
              <View style={styles.menuinner}>
                <Text style={styles.innercontent}>Switch account</Text>

                <Icon
                  type="MaterialIcons"
                  name="swap-calls"
                  style={styles.iconquestion}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

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
