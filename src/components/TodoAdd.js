import React, {useState, useReducer} from 'react';
import {initialState, todoReducer} from '../reducers/todoReducer'
import {v1 as uuid} from 'uuid'


const TodoAdd = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [value, setValue] = useState('');

  const changeHandler = e => setValue(e.target.value)

  const addTodo = e => {
    e.preventDefault()
    const newTodo = {
      item: value, 
      completed: false, 
      id: uuid()
    }
    if(value !== '' ){
      dispatch({
        type: "ADD_ITEM",
        payload: newTodo
      })
      setValue('')
    }
  }

  return(
    <form>
      <input
        type = "text"
        name = "newTodoItem"
        value = {value}
        onChange = {changeHandler}
      />

      <button 
        onClick = {addTodo}
      >submit</button>
    </form>
  )
}

export default TodoAdd