import React, {useReducer} from "react"
import {initialState, todoReducer} from '../reducers/todoReducer.js'
import TodoAdd from './TodoAdd.js'
import TodoItem from './TodoItem.js'

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const handleToggle = (id) => {
    dispatch({type: 'TOGGLE_DONE', payload: id})
  }

  const handleClear = () => {
    dispatch({type: 'CLEAR_COMPLETED_ITEMS'})
  }

  return(
    <section>
      <article className="todo-add">
        <TodoAdd 
          dispatch = {dispatch}
        />
      </article>
      <article className="todo-list">
          {state.map( todoItem => (<TodoItem 
            key = {todoItem.id}
            item = {todoItem}
            handleToggle = {handleToggle}
            dispatch = {dispatch}
          />))}
      </article>
      <article>
        <button
          onClick = {handleClear}
        >Remove Completed Items</button>
      </article>
    </section>
  )
} 

export default Todo