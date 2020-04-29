import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Spinner} from 'native-base';
import {connect} from 'react-redux';
import {SecurityCheck} from '../Redux/Actions/Auth/Login';

const mapStateToProps = state => {
  return {
    confirm: state.Login,
  };
};
export default connect(
  mapStateToProps,
  {SecurityCheck},
)(
  class SecurityCode extends Component {
    constructor(props) {
      super(props);
      this.state = {
        securityCode: 0,
        content: (
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#00d2d3',
              textAlign: 'center',
              marginTop: 50,
            }}>
            KIRIM
          </Text>
        ),
      };
      this.handleScreenToLupaSecurityCode = () => {
        const id = this.props.route.params.data.id_user;
        this.props.navigation.navigate('Buat Code', {data: id});
      };
      this.handleScreenToHome = async () => {
        console.log('lalala');
        const id = this.props.route.params.data.id_user;
        const data = {
          securityCode: this.state.securityCode,
        };
        this.props.SecurityCheck(id, data).then(() => {
          if (this.props.confirm.isLogged) {
            this.props.navigation.navigate('Home');
          }
        });
        if (this.props.confirm.isLoading === false) {
          this.setState({
            content: (this.state.content = <Spinner color="#00d2d3" />),
          });
        }
      };
    }

    render() {
      console.log('hayui', this.props.route.params.data);
      return (
        <View>
          <View>
            <Text
              style={{
                color: '#5f27cd',
                textAlign: 'center',
                marginTop: 30,
                fontWeight: 'bold',
                fontSize: 18,
                fontFamily: 'Roboto',
              }}>
              Masukan Security Code Anda
            </Text>
          </View>
          <View>
            <TextInput
              onChangeText={text => this.setState({securityCode: text})}
              style={{alignSelf: 'center', fontSize: 40}}
              keyboardType="phone-pad"
              placeholder="_ _ _ _ _ _"
              maxLength={6}
            />
          </View>
          <TouchableOpacity onPress={this.handleScreenToHome}>
            {this.state.content}
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleScreenToLupaSecurityCode}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#00d2d3',
                textAlign: 'center',
                marginTop: 50,
              }}>
              LUPA SECURITY CODE?
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  },
);
