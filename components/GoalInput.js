import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

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
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your Course goal!"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" color="#b180f0" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Close"
              color="#f31282"
              onPress={toggleModalHandler}
            />
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
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius:6,
    width: "100%",
    marginLeft: 8,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "60%",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    width: "50%",
    marginHorizontal: 8,
  },
});
