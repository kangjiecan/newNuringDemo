import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  AddToDo: undefined;
  EditToDo: {
    editTask: string;
    editIndex: number;
  };
};

type Props = StackScreenProps<RootStackParamList, 'AddToDo'> & {
  addToDo: (task: string) => void;
};

const AddToDoScreen = ({ navigation, addToDo }: Props) => {
  const [task, setTask] = useState('');

  const handleSaveTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask) {
      addToDo(trimmedTask);
      setTask('');
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
        autoFocus
      />
      <Button title="Add Task" onPress={handleSaveTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default AddToDoScreen;