import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = ({
  enteredGoalText,
  goalInputHandler,
  addGoalHandler,
  isModalOpen,
  toggleModalHandler,
}) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your Course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Close" onPress={toggleModalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding:16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginLeft: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent:"center",
    width: '60%',
    alignItems:"center",
    marginTop: 16,
  },
  button: {
    width: '50%',
    marginHorizontal:8,
  }
});
