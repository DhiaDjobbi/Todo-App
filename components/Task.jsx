import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View>
          <TouchableOpacity onPress={() => props.completeTask(props.id)}>
            {props.task.isDone ? (
              <Icon
                name="check-circle"
                style={{ borderRadius: 5, marginRight: 15 }}
                size={23}
                color="green"
              />
            ) : (
              <Icon
                name="circle-o"
                style={{ borderRadius: 5, marginRight: 15 }}
                size={23}
                color="black"
              />
            )}
          </TouchableOpacity>
        </View>
        <Text style={styles.itemText}>{props.task.msg}</Text>
      </View>

      <Icon.Button
        onPress={() => props.deleteTask(props.id)}
        name="trash"
        size={23}
        style={{ borderColor: "red", borderWidth: 1 }}
        color="red"
        borderRadius={5}
        backgroundColor="white"
      >
        <Text style={{ fontSize: 15 }}>Delete</Text>
      </Icon.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: { flexDirection: "row", alignItems: "center", flexWrap: "wrap" },

  itemText: { maxWidth: "80%" },
});

export default Task;
