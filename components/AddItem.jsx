import { Pressable, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const AddItem = ({ goTo }) => {
  return (
    <Pressable
        style={styles.iconContainer}
        onPress={goTo}
      >
          <AntDesign 
            name="plus" 
            size={32} 
            color="white"
          />
      </Pressable>
  )
}

export default AddItem

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    right: "5%",
    bottom: 50,
    padding: 15,
    backgroundColor: "#ff9b00",
    shadowColor: "black",
    shadowOpacity: .5,
    shadowOffset: "10",
    borderRadius: 50
  }
})