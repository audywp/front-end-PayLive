import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {getUser} from '../Redux/Actions/ActionsUser';
import {connect} from 'react-redux';
import {TransferPaylive as Transfer} from '../Redux/Actions/TransferPaylive';
import AsyncStorage from '@react-native-community/async-storage';

const {width: WIDTH} = Dimensions.get('window');

class TransferPaylive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUser: '',
      amount: '',
    };
  }
  async componentDidMount() {
    await this.props.getUser();
    console.log('ini async storage', await AsyncStorage.getItem('id_user'));
  }

  async getUser() {
    const idUser = this.state.idUser;
    await this.props.getUser(idUser);
  }

  async getId() {
    try {
      const setIdUser = await AsyncStorage.getItem('id_user');
      this.setState({
        idUser: setIdUser, // 26
      });
    } catch (err) {
      console.log(err);
    }
  }

  onSubmit = async e => {
    e.preventDefault();
    console.log('transfer', this.props.Transfer());
    const idUser = this.state.idUser;
    const data = {
      amount: parseInt(this.state.amount),
    };
    await this.props.Transfer(idUser, data);
    await this.props.getUser(idUser);
    await this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <View style={{backgroundColor: 'black', height: '10%'}}>
          <Text style={{color: '#fff', alignSelf: 'center'}}>
            Saldo Paylive Cash : Rp {this.props.profile.usersdetails.cash},00
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Nomor Handphone</Text>
            <TextInput
              style={styles.input}
              placeholder="Nomor Handphone"
              keyboardType="phone-pad"
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Nominal</Text>
            <TextInput
              style={styles.input}
              placeholder="Rp 10000"
              keyboardType="phone-pad"
              onChangeText={amount => this.setState({amount})}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.onSubmit}>
          <Text style={{color: 'white'}}>Transfer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.UserDetails,
  };
};

export default connect(
  mapStateToProps,
  {getUser},
)(TransferPaylive);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15,
  },
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
});
