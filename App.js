import { useState } from "react";
import { StyleSheet, View, Button, FlatList, StatusBar } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    if (!enteredGoalText) {
      return;
    }
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    toggleModalHandler();
    setEnteredGoalText("");
  };

  const deleteItemHandler = (index) => {
    setCourseGoals(courseGoals.filter((__, idx) => idx !== index));
  };
  const toggleModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={toggleModalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          enteredGoalText={enteredGoalText}
          goalInputHandler={goalInputHandler}
          isModalOpen={isModalOpen}
          toggleModalHandler={toggleModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginLeft: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 4,
  },
});
