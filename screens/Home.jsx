import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Searchbar from "../components/Searchbar";
import { Ionicons } from "@expo/vector-icons";
import { notes } from "../constants";

const Home = () => {
  const [myNotes, setMyNotes] = useState(notes);

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
    >
      <View style={styles.itemContent}>
        <Text style={styles.title}> {item.title} </Text>
        <View style={styles.content}>
          <Text style={styles.contentText}>
            { item.id + " "}
            {truncateStr(item.contains, 45)}{" "}
          </Text>
          <Text style={styles.contentDate}> {item.date} </Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    
      <View style={styles.geralView}>
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
          <FlatList data={myNotes} renderItem={renderItem} />
        </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  geralView: {
    gap: 20,
    flex: 1
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
    flex: 1
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
