import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ onPressHandler, isvisible, onCancel }) => {
  const [courseGoals, setCourseGoals] = useState("");
  // const [disableButton, setDisableButton] = useState(true);

  const textChangedHandler = (text) => {
    setCourseGoals(text);
  };

  const addGoalHandler = () => {
    onPressHandler(courseGoals);
    setCourseGoals("");
  };

  return (
    <Modal visible={isvisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goals"
          style={styles.input}
          onChangeText={textChangedHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={onCancel} color="salmon" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 10,
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
