import React from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'

export function DoingsList ({activity}) {
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{activity.title}</Text>
      </View>
      <ScrollView>
        <FlatList 
          data={activity.data}
          keyExtractor={item => item}
          renderItem={(item)=>(
            <Swipeout>
              <ListItem title={item} />
            </Swipeout>
          )}
        />
      </ScrollView>
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
    activity: state.activities.find(activity => activity.id === state.settings.currentActivityId)
  }
}

export default connect(mapStateToProps)(ActivityList)