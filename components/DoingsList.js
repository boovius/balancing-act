import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Icon, Button } from 'react-native-elements'
import { deleteActivity, deleteDoing } from '../actions'
import FadeInView from 'react-native-fade-in-view'
import { osloGray } from '../colors'


export class DoingsList extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.activityTitle,
    }
  }

  state = {
    editing: false,
  }

  toggleEditingMode = () => {
    this.setState({
      editing: !this.state.editing
    })
  }

  removeDoing = (doing) => {
    this.props.dispatch(
      deleteDoing(this.props.activity.id, doing)
    )
  }

  deleteThisActivity = () => {
    Alert.alert(
      'Are you sure?',
      'This will delete all data for this activity for good',
      [
        {text: 'Yes delete', onPress: () => {
          this.props.navigation.pop()
          this.props.dispatch(
            deleteActivity(this.props.activity.id)
          )
        }},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  render() {
    const { activity } = this.props
    return(
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Dates done</Text>
          <TouchableOpacity onPress={this.toggleEditingMode}>
            <Icon 
              name='edit' 
              type='material-icons'
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <List>
            {activity.data.map((doing) =>{
              const date = new Date(doing).toLocaleString()
              return !this.state.editing ? 
              <ListItem key={doing} title={date} hideChevron /> :
              <ListItem 
                key={doing} 
                title={date} 
                rightIcon={
                  <FadeInView duration={500}>
                    <Icon 
                      name='remove'
                      type='font-awesome'
                      color='red'
                      onPress={()=>this.removeDoing(doing)} 
                    />  
                  </FadeInView>
                }
              />
            })}
          </List>
        </ScrollView>
        <Button
          title='Delete This Activity'
          backgroundColor='red'
          onPress={this.deleteThisActivity}
        />
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
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    color: osloGray,
    fontSize: 18,
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