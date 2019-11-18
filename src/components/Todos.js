import React, {useState, useReducer} from "react"
import {initialState, todoReducer} from '../reducers/todoReducer.js'
import TodoItem from './TodoItem.js'

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [newTodoItem, setNewTodoItem] = useState ();



  return(
    <section>
      <article className="todo-add">
        
      </article>
      <article className="todo-list">
          {state.map( todoItem => (<TodoItem 
            key = {todoItem.id}
            item = {todoItem}
          />))}
      </article>
    </section>
  )
} 

export default Todo