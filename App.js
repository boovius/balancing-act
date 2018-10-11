import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Activity from './components/Activity'


export default class App extends React.Component {
  state =  {
    activities: [
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
  }

  doActivity(title) {
    const newActivities = this.state.activities.map(activity => {
      if (activity.title !== title) return activity
      const newData = [
        ...activity.data,
        new Date().toISOString()
      ]
      return {
        ...activity,
        data: newData
      }
    })
    this.setState({
      activities: newActivities
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.activities}
          renderItem={({item})=><Activity key={item.title} onPress={()=>this.doActivity(item.title)} {...item}/>}
        />
      </View>
    )
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
