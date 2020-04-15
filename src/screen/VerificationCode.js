// import React, { Component } from 'react'
// // import { View, Text } from 'react-native'
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Platform,
//   Alert
// } from 'react-native';


// export default class VerificationCode extends Component {
  
//   }
//   render() {
//     let headerText = `What's your ${this.state.enterCode ? 'verification code' : 'phone number'}?`
//     let buttonText = this.state.enterCode ? 'Verify confirmation code' : 'Send confirmation code';
//     let textStyle = this.state.enterCode ? {
//       height: 50,
//       textAlign: 'center',
//       fontSize: 40,
//       fontWeight: 'bold',
//       fontFamily: 'Courier'
//     } : {};
//     return (
//       <View style={styles.container}>

//         <Text style={styles.header}>{headerText}</Text>

//         <Form ref={'form'} style={styles.form}>

//           <View style={{ flexDirection: 'row' }}>

//             {this._renderCountryPicker()}
//             {this._renderCallingCode()}

//             <TextInput
//               ref={'textInput'}
//               name={this.state.enterCode ? 'code' : 'phoneNumber' }
//               type={'TextInput'}
//               underlineColorAndroid={'transparent'}
//               autoCapitalize={'none'}
//               autoCorrect={false}
//               onChangeText={this._onChangeText}
//               placeholder={this.state.enterCode ? '_ _ _ _ _ _' : 'Phone Number'}
//               keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
//               style={[ styles.textInput, textStyle ]}
//               returnKeyType='go'
//               autoFocus
//               placeholderTextColor={brandColor}
//               selectionColor={brandColor}
//               maxLength={this.state.enterCode ? 6 : 20}
//               onSubmitEditing={this._getSubmitAction} />

//           </View>

//           <TouchableOpacity style={styles.button} onPress={this._getSubmitAction}>
//             <Text style={styles.buttonText}>{ buttonText }</Text>
//           </TouchableOpacity>
//     )
//   }
// }

