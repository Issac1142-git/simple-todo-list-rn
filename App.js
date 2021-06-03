import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalItems from "./components/goal-items.component";
import GoalInput from "./components/goal-input.component";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalvisible, setModalvisible] = useState(false);

  const onPressHandler = (courseGoals) => {
    if (courseGoals.length === 0) return;

    setGoals((currentGoals) => [
      ...currentGoals,
      { uid: Math.random().toString(), value: courseGoals },
    ]);
    setModalvisible(false);
  };

  const removeItem = (itemid) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.uid !== itemid);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalvisible(true)} />
      <GoalInput
        onPressHandler={onPressHandler}
        isvisible={modalvisible}
        onCancel={() => setModalvisible(false)}
      />
      <FlatList
        keyExtractor={(item, index) => item.uid}
        data={goals}
        renderItem={(goal) => (
          <GoalItems
            goal={goal.item.value}
            onDelete={removeItem.bind(this, goal.item.uid)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
