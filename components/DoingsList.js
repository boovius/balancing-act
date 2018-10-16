import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { List, ListItem, Icon } from 'react-native-elements'
import { deleteDoing } from '../actions'


export class DoingsList extends Component {
  state = {
    editing: false
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

  render() {
    const { activity } = this.props
    return(
      <View style={styles.container}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{activity.title}</Text>
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
              return !this.state.editing ? 
              <ListItem key={doing} title={doing} hideChevron /> :
              <ListItem 
                key={doing} 
                title={doing} 
                rightIcon={
                  <Icon 
                    name='remove'
                    type='font-awesome'
                    color='red'
                    onPress={()=>this.removeDoing(doing)} 
                  />
                }
              />
            })}
          </List>
        </ScrollView>
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