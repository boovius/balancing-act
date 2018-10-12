import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Increment from './Increment'
import { connect } from 'react-redux'
import { setCurrentIncrement } from  '../actions'

export function IncrementList ({increments, navigation, dispatch}) {
  return (
      <View>
        <Text style={styles.title}>Increments</Text>
        <FlatList
          data={increments}
          renderItem={({ item })=>(
            <Increment 
              onPress={()=>navigateToIncrement(navigation, dispatch, item.key)} 
              {...item}
            />
          )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
  }
})

function navigateToIncrement(navigation, dispatch, key) {
  dispatch(setCurrentIncrement(key))
  navigation.navigate('ActivityList')
}

function mapStateToProps(state) {
  return {
    increments: state.increments
  }
}

export default connect(mapStateToProps)(IncrementList)