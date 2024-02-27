import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../services/styles'

const Secondary = (props: any) => {

  const todo = props.route.params.todo
  const updateTodo = props.route.params.updateTodo

  const [task, setTask] = useState(todo.task);

  const handleUpdate = () => {
    todo.task = task;
    updateTodo(todo)
    props.navigation.navigate("main")
  }

  const handleReset = () => {
    setTask(todo.task)
  }


  return (
    <View style={styles.container}>
      <View style={[styles.todos_container, {backgroundColor: '#DCDCDC'}]}>
        <View>
          <Text style={[styles.title, {fontWeight: 'bold'}]}>Update todo</Text>
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
   
          <View style={[styles.todos_container, {backgroundColor: '#DCDCDC'}]}>
        <TouchableOpacity onPress={handleUpdate} style={[styles.btn, {marginBottom: 10, backgroundColor: '#006400', borderRadius: 15}]}>
          <Text style={[styles.btn_txt, {fontWeight: 'bold'}]}>Update task</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleReset} style={[styles.btn, {backgroundColor: 'rgb(140, 143, 163)', borderRadius: 15}]}>
          <Text style={[styles.btn_txt, {fontWeight: 'bold'}]}>Reset</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
   </View>
  )
}

export default Secondary
