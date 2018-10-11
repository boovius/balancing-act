import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Activity from './Activity'

export default function ActivityList ({activities, currentIncrement, doActivity}) {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{currentIncrement.alias}</Text>
      </View>
      <FlatList 
        data={activities}
        renderItem={({item})=>(
          <Activity 
            increment={currentIncrement.days} 
            onPress={()=>doActivity(item.title)} 
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