import React, {useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)


  return(
    <form>
      <input
        type = "text"
        name = "newTodoItem"
        value = {""}
      />

      <button 
        onClick = {() => {
          dispatch({
            type: "ADD_ITEM",
            payload: state
          })
        }}
      >submit</button>
    </form>
  )
}

export default TodoApp