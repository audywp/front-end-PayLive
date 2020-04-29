import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Config from '../Utils/config';
import axios from 'axios';
import {getHistory} from '../Redux/Actions/Cash';
import {connect} from 'react-redux';

class History extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHistory();
  }

  render() {
    console.log('saldo', this.props.history.data[0]);
    return (
      <View style={styles.container}>
        {this.props.history.data.map((u, i) => {
          // <Card style={{backgroundColor: 'red'}}>
          return (
            <Card>
              <View key={i}>
                <Text>{u.created_at.slice(0, 10)}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>{u.name_transaction}</Text>
                  <Text>
                    {u.name_transaction === 'TOP UP' ? (
                      <Icon name="arrow-up-bold" color={'green'} size={16} />
                    ) : (
                      <Icon name="arrow-down-bold" color={'red'} size={16} />
                    )}
                  </Text>
                  <Text style={{color: 'green'}}>
                    {' '}
                    {u.name_transaction === 'TOP UP'
                      ? '+'.concat(u.balance)
                      : '-'.concat(u.balance)}{' '}
                  </Text>
                </View>
              </View>
            </Card>
          );
        })}
      </View>
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
  {getHistory},
)(History);
