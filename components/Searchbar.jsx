
import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Octicons  } from "@expo/vector-icons"

const Searchbar = () => {

    const [search, setSearch] = useState('')

  return (
    <View style={styles.searchContainer}>
      <Octicons name='search' size={16} color="gray" />
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={setSearch}
        placeholder="Procurar anotações"
        placeholderTextColor="gray"
      />
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    searchContainer: {
        width: "100%",
        paddingVertical: 8,
        paddingHorizontal: "5%",
        borderRadius: 50,
        backgroundColor: "#1f1f1f",
        flexDirection: "row",
        alignItems: 'center',
        gap: 8
    },
    input: {
        width: "100%",
        flexWrap: "wrap",
        color: "gray"
    }
})