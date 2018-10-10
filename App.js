import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Activity from './components/Activity'

const fakeData = [
  {
    title: 'yoga',
    data: [
      1,
      2,
      3,
    ]
  },
  {
    title: 'meditation',
    data: [
      4,
      5,
      6,
    ]
  }
]


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={fakeData}
          renderItem={({item})=><Activity {...item}/>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
