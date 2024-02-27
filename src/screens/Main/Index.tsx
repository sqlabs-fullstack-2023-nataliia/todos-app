import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import styles from '../../services/styles'
import TodoList from '../../components/TodoList'
import { useTodoStore } from '../../services/useTodoStore'

const Main = (props: any) => {

  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)

  const [task, setTask] = useState('')

  const handleAdd = () => {
    const id = Math.floor(Math.random() * 10000);
    addTodo({ id: id, task: task, isComplited: false });
    setTask('')
  }
  
  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.title}>Add new todo</Text>
      </View>
      <View style={styles.form_container}>
        <TextInput
          value={task}
          onChangeText={(text) => setTask(text)}
          keyboardType="default"
          placeholder=""
          autoCapitalize="none"
          style={styles.input}
        />
         <TouchableOpacity onPress={handleAdd} style={styles.btn}>
            <Text style={styles.btn_txt}>Add task</Text>
          </TouchableOpacity>

         {
          todos.length !== 0 && <TodoList props={props}/>
         }

      </View>
    </View>
  )
}

export default Main
