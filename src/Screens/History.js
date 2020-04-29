import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  FlatList,
  Alert,
} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Config from '../Utils/config';
import axios from 'axios';
import {getHistory, getHistoryMore} from '../Redux/Actions/Cash';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  onLoadMore = async () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
    const id = await AsyncStorage.getItem('id_user');
    this.props.getHistoryMore(id, 2);
    console.log(this.props.history.data);
    // Alert.alert('test')
  };

  async componentDidMount() {
    const id = await AsyncStorage.getItem('id_user');
    this.props.getHistory(id, 1);
  }

  render() {
    console.log('saldo', this.props.history.data);
    return (
      <FlatList
        data={this.props.history.data}
        renderItem={({item}) => (
          <Card>
            <View>
              <Text>{item.created_at}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text>{item.name_transaction}</Text>
                <Text>
                  {item.name_transaction === 'TOP UP' ? (
                    <Icon name="arrow-up-bold" color="green" size={16} />
                  ) : (
                    <Icon name="arrow-down-bold" color="red" size={16} />
                  )}
                </Text>
                <Text style={{color: 'green'}}>
                  {item.name_transaction === 'TOP UP'
                    ? '+'.concat(item.balance)
                    : '-'.concat(item.balance)}{' '}
                </Text>
              </View>
            </View>
          </Card>
        )}
        keyExtractor={item => item.id}
        onEndReached={this.onLoadMore}
        onEndReachedThreshold={0.1}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  viewlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderBottomColor: '#e3e8e2',
    borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
  },
  name: {
    fontWeight: 'bold',
  },
  input: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 5,
    height: 80,
    alignItems: 'center',
  },
});

const mapStateToProps = state => {
  console.log('history', state.Cash);
  return {
    history: state.Cash,
  };
};

export default connect(
  mapStateToProps,
  {getHistory, getHistoryMore},
)(History);
