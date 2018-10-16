import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { RemoveDoingButton } from './RemoveButtons'


export function DoingsList ({activity}) {
  const swipeoutBtns = [
    {
      component: RemoveDoingButton,
      onPress: ()=>{ removeActivity()},
      type: 'delete',
      underlayColor: 'rgba(209,26,42,.9)',
    }
  ]
  return(
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{activity.title}</Text>
      </View>
      <ScrollView>
        <List>
          {activity.data.map((doing) =>(
            <Swipeout backgroundColor='#fff' buttonWidth={100} right={swipeoutBtns}>
              <ListItem key={doing} title={doing} hideChevron />
            </Swipeout>
          ))}
        </List>
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

function mapStateToProps(state, {navigation}) {
  const { activityId } = navigation.state.params
  return {
    activity: state.activities.find(activity => activity.id === activityId)
  }
}

export default connect(mapStateToProps)(DoingsList)