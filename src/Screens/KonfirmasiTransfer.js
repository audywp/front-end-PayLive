import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default class BerhasilScreen extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <View>
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
          <Text style={{textAlign: 'center'}}>Mohon Periksa Email Anda</Text>
        </View>
      </View>
    );
  }
}
