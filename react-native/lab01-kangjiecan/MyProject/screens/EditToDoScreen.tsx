import React, { useState, useEffect } from 'react';
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

type Props = StackScreenProps<RootStackParamList, 'EditToDo'> & {
  updateToDo: (index: number, task: string) => void;
};

const EditToDoScreen = ({ navigation, route, updateToDo }: Props) => {
  const [task, setTask] = useState('');
  const { editIndex, editTask } = route.params;

  useEffect(() => {
    setTask(editTask);
  }, [editTask]);

  const handleUpdateTask = () => {
    const trimmedTask = task.trim();
    if (trimmedTask) {
      updateToDo(editIndex, trimmedTask);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Edit task"
        value={task}
        onChangeText={setTask}
        autoFocus
      />
      <Button title="Update Task" onPress={handleUpdateTask} />
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

export default EditToDoScreen;