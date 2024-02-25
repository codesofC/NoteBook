
import { useState } from 'react';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Note from './screens/Note';
import Todo from './screens/Todo';
import { RouteNameContext } from "./utils/useRouteName"
import { NotesContext } from "./utils/useNotes"
import { makeTodos, notes, todos } from './constants';

const Stack = createNativeStackNavigator()

export default function App() {

  const [routeName, setRouteName] = useState("Anotaçoes")
  const [myNotes, setMyNotes] = useState(notes);
  const [todos, setTodos] = useState(makeTodos)


  return (
    <RouteNameContext.Provider value={{ routeName, setRouteName }}>
      <NotesContext.Provider value={{ myNotes, setMyNotes, todos, setTodos }} >
        <NavigationContainer>
          <Stack.Navigator initialRouteName={"Anotaçoes"}>
            <Stack.Screen name='Anotaçoes' component={Home} />
            <Stack.Screen name='Anotacao' component={Note} />
            <Stack.Screen name="Lista" component={Todo} />
          </Stack.Navigator>
        </NavigationContainer>
      </NotesContext.Provider>
    </RouteNameContext.Provider>
  );
}

