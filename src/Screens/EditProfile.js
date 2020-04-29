import React, {Component} from 'react';
import {Avatar, Input} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import {TouchableOpacity, Dimensions} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/AntDesign';
import Iconedit from 'react-native-vector-icons/MaterialIcons';
import {UpdateProfile, GetProfile} from '../Redux/Actions/EditProfile';
import {getUser} from '../Redux/Actions/ActionsUser';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
// import {updateProfile} from './'
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

const {width: WIDTH} = Dimensions.get('window');

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '',
      nama: '',
      upload: false,
      modalVisible: false,
      id: '',
      data: {},
      phone: '',
      email:
        this.props.details.usersdetails &&
        this.props.details.usersdetails.email,
      name:
        this.props.details.usersdetails &&
        this.props.details.usersdetails.fullname,
    };

    this.submitData = async e => {
      console.log('ok');
      const id =
        this.props.details.usersdetails &&
        this.props.details.usersdetails.id_user;

      let formData = new FormData();
      // const file = {
      //   filename: this.state.picture.fileName,
      //   path: this.state.picture.uri,
      //   mimetype: this.state.picture.type,
      //   size: this.state.picture.fileSize,
      // };

      const file = {
        name: this.state.picture.fileName,
        type: this.state.picture.type,
        uri: this.state.picture.uri,
      };
      console.log('ini file', file);
      formData.append('fullname', this.state.name);
      formData.append('email', this.state.email);

      if (this.state.upload) {
        formData.append('picture', file);
      }
      console.log('ini update', id, formData);
      await this.props.UpdateProfile(id, formData);
      await this.props.getUser(id);
      this.setState({upload: false});
      this.props.navigation.navigate('Profile');

      // console.log(this.props.profile)
      // const data = new FormData()
      // const File = {
      //   uri: this.state.picture.uri,
      //   name: this.state.picture.fileName,
      //   type: 'image/jpeg',
      //   size: this.state.fileSize
      // }
      // data.append('picture', File)
      // data.append('phone', '085876927657')
      // data.append('fullname', 'Ayako')
      // data.append('email', 'kobayashi@gmail.com')

      // const bodyFormData = {
      //   // method: 'patch',
      //   body: data,
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }
    };
  }

  handleChoosePhoto = () => {
    const options = {
      quality: 0.7,
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        path: 'images',
        cameraRoll: true,
      },
    };
    ImagePicker.showImagePicker(options, response => {
      if (response.error) {
        console.log(error);
      } else if (!response.didCancel) {
        this.setState({
          upload: true,
          picture: response,
        });
        console.log(response);
      }
    });
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  async componentDidMount() {
    console.log('ini didmoun', this.props.details);
    const phoneNumb = await AsyncStorage.getItem('phone');
    this.setState({
      phone: phoneNumb,
    });
  }

  render() {
    console.log(this.state.phone);
    console.log(this.props.details);
    const {modalVisible} = this.state;
    return (
      <View>
        <View style={{marginTop: 40}}>
          <View
            style={{
              marginBottom: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity onPress={this.handleChoosePhoto}>
              {this.state.picture ? (
                <Avatar
                  size="large"
                  rounded
                  source={{
                    uri: this.state.picture.uri,
                  }}
                  showEditButton
                />
              ) : (
                <Avatar
                  size="large"
                  rounded
                  containerStyle={{alignSelf: 'center'}}
                  source={{
                    uri: `http://20.20.20.162:3030/files/${this.props.details
                      .usersdetails &&
                      this.props.details.usersdetails.profile_picture}`,
                  }}
                  showEditButton
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', paddingHorizontal: 10}}>
            <Input
              containerStyle={{marginBottom: 15}}
              inputStyle={{fontSize: 15}}
              placeholder="Nama Lengkap"
              value={this.state.name}
              onChangeText={text => this.setState({name: text})}
              placeholderTextColor="black"
              label="Nama Lengkap"
              labelStyle={{color: 'black', fontSize: 12}}
            />
            <TouchableOpacity
              style={{}}
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Input
                containerStyle={{marginBottom: 15}}
                rightIcon={<Iconedit name="edit" size={30} color="grey" />}
                inputStyle={{fontSize: 15}}
                placeholder="085876927639"
                value={this.state.phone}
                keyboardType="phone-pad"
                placeholderTextColor="black"
                label="Nomor Ponsel"
                labelStyle={{color: 'black', fontSize: 12}}
              />
            </TouchableOpacity>
            <Input
              containerStyle={{marginBottom: 15}}
              rightIcon={<Iconedit name="edit" size={30} color="grey" />}
              inputStyle={{fontSize: 15}}
              placeholder="ainayass@gmail.com"
              placeholderTextColor="black"
              label="Email"
              labelStyle={{color: 'black', fontSize: 12}}
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <TouchableOpacity
              style={styles.btnJoinNow}
              onPress={this.submitData}>
              <Text style={{color: 'white'}}>SIMPAN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalText}>
                <Text>Apakah Anda yakin ingin mengubah nomor ponsel?</Text>
                <Text>
                  Pengubahan nomor ponsel akan memutuskan koneksi PayLive dengan
                  aplikasi partner
                </Text>
                <Text>
                  Untuk menghubungkan kembali, silahkan aktivasi ulang di
                  aplikasi partner
                </Text>
              </View>

              <TouchableHighlight
                style={{...styles.openButton, backgroundColor: '#2196F3'}}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Tutup</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnJoinNow: {
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    height: 200,
    width: 330,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  profile: state.Profile,
  details: state.UserDetails,
});
export default connect(
  mapStateToProps,
  {UpdateProfile, GetProfile, getUser},
)(EditProfile);
