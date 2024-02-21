import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function App() {

  const [navigateToMenu, setNavigateToMenu] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <MaterialCommunityIcons 
          name="notebook" size={24} 
          color={!navigateToMenu ? '#ff9b00' : '#242424'}
          onPress={() => setNavigateToMenu(false)}
        />
        <FontAwesome6 
          name="check-square" 
          size={24} 
          color={navigateToMenu ? '#ff9b00' : '#242424'}
          onPress={() => setNavigateToMenu(true)}
        />
      </View>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: "5%",
    backgroundColor: "#000",
    minHeight: "100%",
    gap: 10
  },
  nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    paddingVertical: 10,
  }
});
