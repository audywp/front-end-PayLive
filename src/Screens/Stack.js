import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './LoginScreen';
import Join from './JoinPayLiveScreen';
import SKKP from './SKKPScreen';
import History from './History';
// import Transfer from './TransferPaylive'
import SecurityCode from './SecurityCode';
import LupaSecurityCode from './LupaSecurityCode';
import CodeOTP from './CodeOTPScreen';
import GreetingUser from './GreetingUser';
import BottomStack from './BottomStack';
import MakeSecurity from './MakeSecurity';
import TopUp from './TopUp';
import CategoryPulsa from './CategoryPulsa';
import EditProfile from './EditProfile';
import UbahEmail from './UbahEmail';
import ConfirmSecurity from './ConfirmSecurityCode';
import {connect} from 'react-redux';

// redux state
import {SecurityCheck} from '../Redux/Actions/Auth/SecurityCheck';
import {setVerify} from '../Redux/Actions/Auth/Verify';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const mapStateToProps = state => {
  return {
    check: state.SecurityCheck,
    verify: state.Verify,
    login: state.Login,
  };
};
export default connect(
  mapStateToProps,
  {SecurityCheck, setVerify},
)(
  class StackScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        token: '',
      };
    }

    // componentDidMount () {
    //   this.getToken()
    // }

    // async getToken () {
    //   try {
    //     const token = await AsyncStorage.getItem('token')
    //     this.setState({
    //       token: token
    //     })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    async componentDidMount() {
      const storage = await AsyncStorage.getItem('token');
      this.setState({
        token: storage,
      });
    }

    render() {
      console.log(this.props.login.isLogged);
      return (
        <Stack.Navigator>
          {this.props.login.isLogged ? (
            <Stack.Screen
              name="Home"
              component={BottomStack}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name="Greeting User"
              component={GreetingUser}
              options={{headerShown: false}}
            />
          )}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Join PayLive"
            component={Join}
            options={{
              title: 'Join PayLive',
              headerShown: true,
              headerTintColor: '#5f27cd',
            }}
          />
          <Stack.Screen
            name="Category Pulsa"
            component={CategoryPulsa}
            options={{
              title: 'Pulsa',
              headerShown: true,
              headerTintColor: '#5f27cd',
            }}
          />
          <Stack.Screen
            name="Edit Profile"
            component={EditProfile}
            options={{headerShown: true, headerTintColor: '#5f27cd'}}
          />
          {/* <Stack.Screen name='Transfer PayLive' component={Transfer} options={{ headerShown: true, headerTintColor: '#5f27cd' }} /> */}
          {/* <Stack.Screen name='Konfirmasi Transfer' component={Transfer} options={{ headerShown: true, headerTintColor: '#5f27cd' }} /> */}
          <Stack.Screen
            name="Ubah Email"
            component={UbahEmail}
            options={{headerShown: true, headerTintColor: '#5f27cd'}}
          />

          <Stack.Screen
            name="Top Up"
            component={TopUp}
            options={{
              title: 'TOP UP',
              headerShown: true,
              headerTintColor: '#5f27cd',
            }}
          />
          <Stack.Screen
            name="Lupa Security Code"
            component={LupaSecurityCode}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Confirm Security"
            component={ConfirmSecurity}
            options={{headerShwon: true}}
          />
          <Stack.Screen
            name="Security Code"
            component={SecurityCode}
            options={{
              title: 'SIGN IN',
              headerShown: true,
              headerTintColor: '#5f27cd',
            }}
          />
          <Stack.Screen
            name="CodeOTP"
            component={CodeOTP}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="SKKP"
            component={SKKP}
            options={{
              title: 'Syarat & Ketentuan',
              headerShown: true,
              headerTintColor: '#5f27cd',
            }}
          />
          <Stack.Screen
            name="Buat Code"
            component={MakeSecurity}
            options={{
              title: 'SIGN IN',
              headerShown: true,
              headerTintColor: '#5f27cd',
            }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{
              title: 'History',
              headerShown: true,
              headerTintColor: '#eef0f3',
              headerStyle: {
                backgroundColor: '#4c2a86',
              },
            }}
          />
        </Stack.Navigator>
      );
    }
  },
);
