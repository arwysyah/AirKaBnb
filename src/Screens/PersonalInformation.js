import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Icon,
  Fab,
  DatePicker,
  Picker,
} from 'native-base';

export default class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
    };
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  alertHandler = () => {
    Alert.alert('TEST SAVE');
  };
  render() {
    return (
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
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
          <TouchableOpacity onPress={this.alertHandler}>
            <View style={{marginLeft: '80%', marginTop: '4%'}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 40, marginLeft: 20}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            Edit personal Info
          </Text>
        </View>
        <View style={{width: '90%', marginLeft: 10}}>
          <Form>
            <Item floatingLabel last>
              <Label>Fist Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last style={{marginBottom: 30}}>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Text style={{marginLeft: 5, fontSize: 15}}>Gender</Text>
            <Picker
              mode="dropdown"
              placeHolderText="Select date"
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              style={{width: undefined}}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}>
              <Picker.Item label="Male" value="key0" />
              <Picker.Item label="Female" value="key1" />
              <Picker.Item label="Other" value="key2" />
            </Picker>
            <Text style={{marginLeft: 5, fontSize: 15}}>Birth date</Text>
            <DatePicker
              defaultDate={new Date(2000, 1, 1)}
              minimumDate={new Date(1980, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'fade'}
              androidMode={'default'}
              placeHolderText="Select date"
              textStyle={{color: 'black'}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={this.setDate}
              disabled={false}
            />
            <Item floatingLabel last style={{marginTop: -10}}>
              <Label>Email</Label>
              <Input />
            </Item>
          </Form>
        </View>
      </ScrollView>
    );
  }
}
