import React from 'react';
import { ScrollView, View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Increment from './Increment'
import { connect } from 'react-redux'
import { setCurrentIncrement } from  '../actions'
import { Button } from 'react-native-elements'

export function IncrementList ({increments, navigation, dispatch}) {
  return (
      <View style={styles.container}>
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
        </ScrollView>
        <TouchableOpacity style={styles.addIncrement}>
          <Button 
            onPress={()=>{navigation.navigate('AddIncrement')}}
            rightIcon={{name: 'plus', type: 'font-awesome'}}
            title="Add Increment"
          />
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleRow: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 24,
    textAlign: 'center',
  },
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