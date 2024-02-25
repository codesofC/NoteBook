import Navbar from "../components/Navbar";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import Searchbar from "../components/Searchbar";
import { Ionicons } from "@expo/vector-icons";
import { useNotes } from "../utils/useNotes";
import AddItem from "../components/AddItem";

const Home = ({ navigation }) => {
  
  const { myNotes } = useNotes()

  const truncateStr = (str, limit) => {
    return str.length > limit ? str.slice(0, limit) + "..." : str;
  };

  const renderItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        {
          transform: pressed ? [{ scale: 0.9 }] : [{ scale: 1 }],
        },
      ]}
      onPress={() => goToNote(item)}
    >
      <View style={styles.itemContent}>
        <Text style={styles.title}> {item.title.length > 0 ? item.title : 'Sem título'} </Text>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            {item.content.length > 0 ? truncateStr(item.content, 45) : 'Sem texto'}
          </Text>
          <Text style={styles.contentDate}> {getDateString(item.date)} </Text>
        </View>
      </View>
    </Pressable>
  );

  const getDateString = (date) => {
    const dateInstance = new Date(date);
    const year = dateInstance.getFullYear();
    const monthDate = dateInstance.toLocaleDateString("pt-br", {
      month: "long",
    });
    const day = dateInstance.getDate();
    const hour = dateInstance.getHours()
    const minutes = dateInstance.getMinutes()


    return `${day} de ${monthDate} de ${year}, ${hour > 10 ? hour : '0'+hour}:${minutes > 10 ? minutes : '0'+minutes}`;
  };

  const goToNote = (item) => {
    navigation.navigate("Anotacao", {
      title: item.title,
      id: item.id,
      content: item.content,
      date: getDateString(item.date),
    });
  };


  return (
    <View style={styles.geralView}>
      <Navbar navigateToMyNotes={() => navigation.navigate("Anotaçoes")} navigateToTodo={() => navigation.navigate("Lista")} />
      <Searchbar />

      <View style={styles.folderContainer}>
        <Text style={styles.folder}> Tudo </Text>
        <Text style={styles.folder}>
          {" "}
          <Ionicons
            name="folder-outline"
            color="#ff9b00"
            style={{ fontSize: 17, fontWeight: 700 }}
          />{" "}
        </Text>
      </View>

      <View style={styles.itemContainer}>
        <FlatList
          data={myNotes.sort((a, b) => new Date(b.date) - new Date(a.date))}
          renderItem={renderItem}
        />
      </View>

      <AddItem goTo={() => goToNote({
          title: "",
          content: "",
          id: myNotes.length + 2,
          date: Date.now()
        })} />
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  geralView: {
    position: "relative",
    gap: 20,
    flex: 1,
    paddingHorizontal: "5%",
    backgroundColor: "#000",
    minHeight: "100%",
  },
  folderContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  folder: {
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: "gray",
    borderRadius: 10,
    fontWeight: "600",
    fontSize: 16,
  },
  itemContainer: {
    flex: 1,
  },
  itemContent: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: "#242424",
    borderRadius: 20,
    marginVertical: 8,
    gap: 5,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  content: {
    gap: 5,
  },
  contentText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "400",
  },
  contentDate: {
    fontSize: 12,
    color: "#fff",
  },
});
