import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Activity from './Activity'
import { connect } from 'react-redux';

export function ActivityList ({activities, currentIncrement}) {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{currentIncrement.alias}</Text>
      </View>
      <FlatList 
        data={activities}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <Activity 
            increment={currentIncrement.days} 
            {...item}
            />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

function mapStateToProps(state) {
  console.log('state inc key', state.currentIncrementKey)
  return {
    activities: state.activities,
    currentIncrement: state.increments.find(increment => increment.id === state.currentIncrementId)
  }
}

export default connect(mapStateToProps)(ActivityList)