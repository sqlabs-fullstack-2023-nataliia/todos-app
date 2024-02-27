import React from 'react'
import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import TodoModel from '../models/TodoModel'
import styles from '../services/styles'
import Todo from './Todo'
import { useTodoStore } from '../services/useTodoStore'

interface Props {
    props: any,
}

const TodoList = ({ props }: Props) => {

    const todos = useTodoStore((state) => state.todos)
    
  return (
    <View style={styles.container_list}>
        <View style={styles.todos_container}>
            <FlatList
              style={{width: '100%'}}
              data={todos}
              keyExtractor={item => item.id + ''}
              renderItem={itemRow => 
                <Todo props={props} todo={itemRow.item}/>
              }
            />
          </View>
    </View>
  )
}

export default TodoList
