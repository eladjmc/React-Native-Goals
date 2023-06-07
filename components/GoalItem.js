import { Pressable, StyleSheet, Text, View } from "react-native";
//nothing
const GoalItem = ({ itemData, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={() => {
          onDeleteItem(itemData.index);
        }}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: { color: "white", padding: 8 },
});
