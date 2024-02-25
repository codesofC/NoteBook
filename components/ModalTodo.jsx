import { StyleSheet, TextInput, View, Modal, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { useNotes } from "../utils/useNotes";

const ModalTodo = ({ isVisible, setIsVisible }) => {
  const [text, setText] = useState("");

  const { setTodos } = useNotes()

  const handlePress = () => {
    
    if(text.length === 0){
        return
    }
    
    
    setTodos(prevState => ([
        ...prevState,{
            id: prevState.length + 1,
            todo: text,
            isChecked: false
        }
    ]))
    setIsVisible(false)
    setText("")
  }

  return (
      <Modal visible={isVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <Checkbox disabled={true} />
              <TextInput
                value={text}
                onChangeText={setText}
                cursorColor="#ff9b00"
                style={{width: "100%"}}
              />
            </View>
            <View>
              <Text 
                style={{...styles.textButton, color: text.length > 0 ? '#ff9b00' : 'gray', pointerEvents: text.length > 0 ? 'auto' : 'none'}}
                onPress={handlePress}
              > 
                Concluído 
             </Text>
            </View>
          </View>
        </View>
      </Modal>
  );
};

export default ModalTodo;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 15,
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.5)"
  },
  modalView: {
    width: "100%",
    padding: 25,
    gap: 35,
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    borderRadius: 15,
  },
  textButton: {
    alignSelf: "flex-end", 
    fontSize: 17, 
    fontWeight: "600",
  }
});
