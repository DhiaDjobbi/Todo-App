import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [newTaskMsg, setNewTaskMsg] = useState("");
  const [tasks, setTasks] = useState([]);

  const deleteTask = (index) => {
    let copyItems = [...tasks];
    copyItems.splice(index, 1);
    setTasks(copyItems);
  };

  const completeTask = (index) => {
    let newArray = [...tasks]; // copying the old  array
    let old = newArray[index].isDone;
    newArray[index].isDone = !old;
    setTasks(newArray);
  };

  const handleNewTask = () => {
    let newTask = {};
    newTask.msg = newTaskMsg;
    newTask.isDone = false;
    setTasks([...tasks, newTask]);
    setNewTaskMsg("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      {/* tasks */}
      <View style={styles.tasksBox}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {tasks.map((item, index) => {
            return (
              <Task
                key={index}
                task={item}
                completeTask={completeTask}
                deleteTask={deleteTask}
                id={index}
              />
            );
          })}
        </View>
      </View>
      {/* add new */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.newTask}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          onChangeText={(text) => setNewTaskMsg(text)}
          value={newTaskMsg}
        />
        <TouchableOpacity onPress={() => handleNewTask()}>
          <View style={styles.addButton}>
            <Text style={styles.addTextIcon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksBox: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: { marginTop: 30 },

  newTask: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    color: "#717171",
    fontSize: 17,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "white",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: "white",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addTextIcon: {
    fontSize: 28,
    color: "#717171",
    fontWeight: "bold",
  },
});
