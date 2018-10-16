import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import ActivityListItem from './ActivityListItem'
import { connect } from 'react-redux';
import { Button } from 'react-native-elements'

export function ActivityList ({activities, currentIncrement, navigation}) {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{currentIncrement.alias}</Text>
      </View>
      <ScrollView>
        <FlatList 
          data={activities}
          keyExtractor={item => item.id}
          renderItem={({item})=>(
            <ActivityListItem 
              increment={currentIncrement.days} 
              {...item}
              navigation={navigation}
              />
          )}
        />
      </ScrollView>
      <TouchableOpacity>
        <Button
          onPress={() => { navigation.navigate('AddActivity') }}
          rightIcon={{ name: 'plus', type: 'font-awesome' }}
          title="Add Activity"
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

function mapStateToProps(state) {
  return {
    activities: state.activities,
    currentIncrement: state.increments.find(increment => increment.id === state.settings.currentIncrementId)
  }
}

export default connect(mapStateToProps)(ActivityList)