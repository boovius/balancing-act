import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import ActivityListItem from './ActivityListItem'
import { connect } from 'react-redux';
import { Button } from 'react-native-elements'

export class ActivityList extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.incrementAlias
    }
  }

  render() {
    const {activities, currentIncrement, navigation} = this.props
    return(
      <View style={styles.container}>
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