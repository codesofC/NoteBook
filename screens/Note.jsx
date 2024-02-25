import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState, useEffect } from "react";
import { useNotes } from "../utils/useNotes";


const Note = ( { route }) => {

  const { setMyNotes, myNotes } = useNotes()
  const { title, content, date, id } = route.params

  const [titleState, setTitleState] = useState(title || "");
  const [contentState, setContentState] = useState(content || "");

  useEffect(() => {

    const indexNoteUpdate = myNotes.findIndex(item => item.id === id);

    if(!contentState && !titleState){

      return
    }

    if(indexNoteUpdate !== -1){

      if(myNotes[indexNoteUpdate].content === contentState && myNotes[indexNoteUpdate].title === titleState){

        return
      }

      updateNote(indexNoteUpdate)
    }else{
      addNote()
    }
  }, [contentState, titleState])

  const updateNote = (id) => {

    const actuallyDate = new Date()

    const updateNote = {
      ...myNotes[id],
      title: titleState,
      content: contentState,
      date: actuallyDate.getTime()
    }

    const newArray = [...myNotes]
    
    newArray.splice(id, 1, updateNote)

    setMyNotes(newArray)
  }

  const addNote = () => {
    const newNote = {
      id,
      title: titleState,
      content: contentState,
      date: Date.now()
    }

    setMyNotes(prevState => ([
      newNote,
      ...prevState,
    ]))
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={titleState}
        onChangeText={setTitleState}
        style={styles.title}
        selectionColor="#ff9b00"
        placeholder="Título"
        placeholderTextColor="gray"
      />
      <Text style={styles.dateContent}>
        { date } | { contentState.length + `${contentState.length > 0 ? 'caracteres' : 'caractere'}` }
      </Text>
      <TextInput
        value={contentState}
        onChangeText={(text) => setContentState(text)}
        style={styles.contentNote}
        multiline={true}
        selectionColor="#ff9b00"
        placeholder="Comece a escrever"
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 22,
    paddingVertical: 10,
    fontWeight: "600",
    color: "#fff"
  },
  dateContent: {
    fontSize: 14,
    color: "gray",
  },
  contentNote: {
    width: "100%",
    paddingVertical: 10,
    fontSize: 18,
    textAlignVertical: "top",
    flex: 1,
    color: "#fff"
  },
});
