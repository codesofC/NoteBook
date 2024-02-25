import { useState } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import { useNotes } from "../utils/useNotes";
import AddItem from "../components/AddItem";
import ModalTodo from "../components/ModalTodo";

const Todo = ({ navigation }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const { todos, setTodos } = useNotes();

  const handleIsChecked = (id) => {
    const indexCheckedFind = todos.findIndex((item) => item.id === id);

    const updateChecked = {
      ...todos[indexCheckedFind],
      isChecked: !todos[indexCheckedFind].isChecked,
    };
    const newArray = [...todos];
    newArray.splice(indexCheckedFind, 1, updateChecked);

    setTodos(newArray);
  };

  const renderItemIsNotChecked = ({ item }) =>
    !item.isChecked ? (
      <View style={styles.todoView}>
        <CheckBox
          value={item.isChecked}
          onValueChange={() => handleIsChecked(item.id)}
        />
        <Text style={{ fontWeight: "600" }}>{item.todo}</Text>
      </View>
    ) : null;

  const renderItemIsChecked = ({ item }) =>
    item.isChecked ? (
      <View style={{ ...styles.todoView, opacity: 0.4 }}>
        <CheckBox
          value={item.isChecked}
          onValueChange={() => handleIsChecked(item.id)}
          color="#ff9b00"
        />
        <Text style={{ fontWeight: "600" }}>{item.todo}</Text>
      </View>
    ) : null;

  return (
    <View style={styles.geralView}>
      <Navbar
        navigateToMyNotes={() => navigation.navigate("Anotaçoes")}
        navigateToTodo={() => navigation.navigate("Lista")}
      />
      <Searchbar />

      <View style={{ flex: 1 }}>
        {todos ? (
          <View style={{ flex: 1}}>
            <View style={{ flex: (todos.findIndex((item) => item.isChecked === true) !== -1) ? 0.5 : 1 }}>
              <FlatList data={todos} renderItem={renderItemIsNotChecked} />
            </View>
            {todos.findIndex((item) => item.isChecked === true) !== -1 ? (
              <View style={{ gap: 10, flex: .5 }}>
                <Text style={{ color: "gray", fontWeight: "500" }}>
                  {" "}
                  Concluído{" "}
                </Text>
                <FlatList data={todos} renderItem={renderItemIsChecked} />
              </View>
            ) : null}
          </View>
        ) : (
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text> Nehuma tarefa aqui ainda </Text>
          </View>
        )}
      </View>

      <AddItem goTo={() => setIsVisibleModal(true)} />
      <ModalTodo isVisible={isVisibleModal} setIsVisible={setIsVisibleModal} />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  geralView: {
    position: "relative",
    gap: 20,
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "#000",
    minHeight: "100%",
  },
  todoView: {
    flexDirection: "row",
    gap: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: "5%",
    borderRadius: 15,
  },
});
