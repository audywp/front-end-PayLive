import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class BerhasilScreen extends Component {

  toHome = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    console.disableYellowBox = true;
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Icon name="checkcircle" size={40} color="#2ed573" />
          <Text
            style={{
              color: '#2ed573',
              textAlign: 'center',
              marginTop: 30,
              fontWeight: 'bold',
              fontSize: 18,
              fontFamily: 'Roboto',
            }}>
            Berhasil Transfer
          </Text>
          <TouchableOpacity
            onPress={this.toHome}
            style= {{
              paddingVertical: 10,
              paddingHorizontal: 15,
              backgroundColor:'#4a2d8b',
              marginTop: 20,
              borderRadius: 8
            }}
          >
            <Text style={{ color: 'white' }}>Back To Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
