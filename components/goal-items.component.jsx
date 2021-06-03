import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const GoalItems = ({goal, onDelete}) => (
    <TouchableOpacity activeOpacity = {0.5}  onPress = {onDelete}>
    <View style={styles.listgoal}>
    <Text>{goal}</Text>
  </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
    listgoal: {
        padding: 10,
        margin: 10,
        backgroundColor: "#ccc",
        borderColor: "black",
        borderWidth: 1,
      }
})

export default GoalItems