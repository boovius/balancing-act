import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  removeBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtnText: {
    color: '#fff',
    fontSize: 16
  }
})

export const RemoveIncrementButton = (
  <View style={styles.removeBtn}>
    <Text style={styles.removeBtnText}>Remove</Text>
    <Text style={styles.removeBtnText}>Increment</Text>
  </View>
)

export const RemoveActivityButton = (
  <View style={styles.removeBtn}>
    <Text style={styles.removeBtnText}>Remove</Text>
    <Text style={styles.removeBtnText}>Activity</Text>
  </View>
)

export const RemoveActivityButton = (
  <View style={styles.removeBtn}>
    <Text style={styles.removeBtnText}>Remove</Text>
    <Text style={styles.removeBtnText}>Time Done</Text>
  </View>
)