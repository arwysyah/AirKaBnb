
import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {
  Container,
  Header,
  Card,

  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  View,
  Title,
  Item,
  Badge,
} from 'native-base';
import axios from 'axios';
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSearch: [],
      valueSearch: '',
    };
  }

  onSearch() {
    const search = this.state.valueSearch;
    axios
      .get(
        `http://192.168.100.155:9000/stay/filter/stays/search/${search}`,
      )
      .then(response => {
        this.setState({
          dataSearch: response.data.response,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={{flex:1}}>
      <Container >
        <Header style={{backgroundColor:'#FF5A5F'}}>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon style={{color: 'white'}} name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{color: 'white'}}>Search</Title>
          </Body>
          <Right>
            <Body>
              <Item
                rounded
                style={{
                  height: 30,
                  width: 210,
                  backgroundColor: 'white',
                  left:-10
                }}>
                <TextInput
                  placeholder="Search..."
                  onChangeText={TextInputValue =>
                    this.setState({valueSearch: TextInputValue})
                  }
                />
                {/* placeholderTextColor="white" */}
              </Item>
            </Body>
            <Button
              onPress={() => this.onSearch()}
              transparent
              style={{marginRight: 10}}>
              <Icon style={{color: 'black'}} name="search" />
            </Button>
          
          </Right>
        </Header>
        <ScrollView >
          <View >
            <View style={{alignItems: 'center'}}>
              <Text>Search Result</Text>
            </View>
            {this.state.dataSearch.length > 0 ? (
              <View >
                {this.state.dataSearch.map((st, index) => {
                  return (
                    <TouchableOpacity onPress ={id=>{this.props.navigation.navigate('DetailStay',{
                        st:{...st}
                      })}}>
                              
                    <Card key={index}>
                      <View
                        style={{
                          paddingLeft: 30,
                          flexDirection: 'row',
                        
                        }}>
                        {/* <Text>1</Text> */}
                 
                        <Card transparent width={145} height={100}>
                      <Image
                            borderRadius={5}
                            source={{
                              uri: st.image_url,
                            }}
                            style={{
                              height: 200,
                              width: '100%',
                              flex: 1,
                            }}
                          />
                        
                        </Card>
                        <View
                          style={{
                            top: 15,
                           paddingLeft:10
                          }}>
                          <Text style={{color: 'black', fontSize: 16}}>
                            {st.name}
                          </Text>
                          <Text
                            numberOfLines={1}
                            style={{width: 180, fontWeight: 'bold',color:'grey',fontSize:12}}>
                            {st.location}
                          </Text>
                         
                          <Badge
                            style={{height: 20, justifyContent: 'center',borderRadius:3}}
                            info>
                            <Text>{st.owner}</Text>
                          </Badge>
                          <Badge
                            style={{
                              justifyContent: 'center',
                              height: 20,
                              marginTop: 5,
                              backgroundColor:
                                st.room_type === 'SingleRoom' ? 'green' : 'red',
                                borderRadius:3
                                
                            }}>
                            <Text>Rp{st.price}/Malam</Text>
                          </Badge>
                        </View>
                        {/* <View></View> */}
                      </View>
                    </Card>
                    </TouchableOpacity>
                  );
                })}
                
              </View>
            
            ) : (
              <View
                style={{
                  marginTop: '40%'
                }}>
                <View>
                  <Text style={{textAlign: 'center'}}>Search Empty</Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 10}}>
               
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </Container>
      </View>
    );
  }
}