import React, { useState } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from '../services/styles'
import TodoModel from '../models/TodoModel'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useTodoStore } from '../services/useTodoStore'

interface Props {
    props: any,
    todo: TodoModel
}

const Todo = ({props, todo}: Props) => {

    const updateTodo = useTodoStore((state) => state.updateTodo)
    const deleteTodo = useTodoStore((state) => state.deleteTodo)
    
    const handleUpdate = () => {
        todo.isComplited = !todo.isComplited
        updateTodo(todo)
    }
    
  return (
    <View style={[styles.row, {backgroundColor: todo.isComplited ? 'rgb(133, 222, 141)' : 'rgb(255, 163, 179)', marginTop: 5, padding: 10, borderRadius: 15}]}>
        <TouchableOpacity onPress={handleUpdate}> 
            <MaterialCommunityIcons size={30} name={todo.isComplited ? 'checkbox-marked-circle-outline' : 'checkbox-blank-circle-outline'}/>
        </TouchableOpacity>
        <Text style={{fontSize: 25, width: '70%', marginStart: 5}}>
            {todo.task}            
        </Text>
        <TouchableOpacity onPress={() => {props.navigation.navigate("secondary", {updateTodo: updateTodo, todo: todo})}} > 
            <MaterialCommunityIcons size={30} name="pencil" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(todo.id)} > 
            <MaterialCommunityIcons size={30} name="delete"/>
        </TouchableOpacity>
    </View> 
  )
}

export default Todo
