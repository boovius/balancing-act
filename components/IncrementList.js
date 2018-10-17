import React from 'react';
import { ScrollView, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import IncrementListItem from './IncrementListItem'
import { connect } from 'react-redux'
import { setCurrentIncrement } from  '../actions'
import { Button } from 'react-native-elements'

export function IncrementList ({increments, navigation, dispatch, defaultIncrementId}) {
  if (typeof defaultIncrementId !== 'undefined' && defaultIncrementId !== null) {
    const alias = increments.find(increment => increment.id === defaultIncrementId).alias
    navigateToIncrement(navigation, dispatch, defaultIncrementId, alias)
  }
  return (
      <View style={styles.container}>
        <ScrollView>
          <FlatList
            data={increments}
            keyExtractor={item=>item.id}
            renderItem={({ item })=>(
              <IncrementListItem
                onPress={()=>navigateToIncrement(navigation, dispatch, item.id, item.alias)} 
                {...item}
                navigation={navigation}
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
})

function navigateToIncrement(navigation, dispatch, id, alias) {
  dispatch(setCurrentIncrement(id))
  navigation.navigate('ActivityList', {incrementAlias: alias})
}

function mapStateToProps(state) {
  return {
    increments: state.increments,
    defaultIncrementId: state.settings.defaultIncrementId,
  }
}

export default connect(mapStateToProps)(IncrementList)