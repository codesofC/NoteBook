import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouteName } from '../utils/useRouteName';


const Navbar = ({ navigateToMyNotes, navigateToTodo}) => {

    const { routeName, setRouteName } = useRouteName()

  return (
    <View style={styles.nav}>
        <MaterialCommunityIcons 
          name="notebook" size={24} 
          color={routeName==='Anotaçoes' ? '#ff9b00' : '#242424'}
          onPress={() => {
            setRouteName("Anotaçoes")
            navigateToMyNotes()
          }}
        />
        <FontAwesome6 
          name="check-square" 
          size={24} 
          color={routeName==='Lista' ? '#ff9b00' : '#242424'}
          onPress={() => {
            setRouteName("Lista")
            navigateToTodo()
          }}
        />
      </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
    nav: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
        paddingVertical: 10,
      },
})