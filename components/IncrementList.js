import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Increment from './Increment'
import { connect } from 'react-redux'
import { setCurrentIncrement } from  '../actions'

export function IncrementList ({increments, navigation, dispatch}) {
  return (
      <ScrollView>
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>Increments</Text>
        </View>
        <FlatList
          data={increments}
          keyExtractor={item=>item.id}
          renderItem={({ item })=>(
            <Increment 
              onPress={()=>navigateToIncrement(navigation, dispatch, item.id)} 
              {...item}
            />
          )}
        />
        <View>
          <TouchableOpacity onPress={()=>{navigation.navigate('AddIncrement')}}>
            <Text>Add Increment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleRow: {
    marginTop: 30,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
  }
})

function navigateToIncrement(navigation, dispatch, id) {
  dispatch(setCurrentIncrement(id))
  navigation.navigate('ActivityList')
}

function mapStateToProps(state) {
  return {
    increments: state.increments
  }
}

export default connect(mapStateToProps)(IncrementList)