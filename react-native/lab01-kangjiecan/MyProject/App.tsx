// App.tsx
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddToDoScreen from './screens/AddToDoScreen';
import EditToDoScreen from './screens/EditToDoScreen';

const STORAGE_KEY = '@todo_list';

type RootStackParamList = {
  Home: undefined;
  AddToDo: undefined;
  EditToDo: {
    editTask: string;
    editIndex: number;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [toDoList, setToDoList] = useState<string[]>([]);

  useEffect(() => {
    loadTodoList();
  }, []);

  const loadTodoList = async () => {
    try {
      const savedTodoList = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedTodoList) {
        setToDoList(JSON.parse(savedTodoList));
      }
    } catch (error) {
      console.error('Error loading todo list:', error);
    }
  };

  const saveTodoList = async (newList: string[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    } catch (error) {
      console.error('Error saving todo list:', error);
    }
  };

  const addToDo = async (task: string) => {
    const newList = [...toDoList, task];
    setToDoList(newList);
    await saveTodoList(newList);
  };

  const deleteToDo = async (index: number) => {
    const newList = [...toDoList];
    newList.splice(index, 1);
    setToDoList(newList);
    await saveTodoList(newList);
  };

  const updateToDo = async (index: number, newTask: string) => {
    const newList = [...toDoList];
    newList[index] = newTask;
    setToDoList(newList);
    await saveTodoList(newList);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: 'My To-Do List',
            headerStyle: { backgroundColor: '#f9f9f9' },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          {(props) => (
            <HomeScreen
              {...props}
              toDoList={toDoList}
              deleteToDo={deleteToDo}
            />
          )}
        </Stack.Screen>
        
        <Stack.Screen
          name="AddToDo"
          options={{
            title: 'Add Task',
            headerStyle: { backgroundColor: '#f9f9f9' },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          {(props) => (
            <AddToDoScreen
              {...props}
              addToDo={addToDo}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="EditToDo"
          options={{
            title: 'Edit Task',
            headerStyle: { backgroundColor: '#f9f9f9' },
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          {(props) => (
            <EditToDoScreen
              {...props}
              updateToDo={updateToDo}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;