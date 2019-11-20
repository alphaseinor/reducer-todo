import React, {useState} from 'react';
import {v1 as uuid} from 'uuid'


const TodoAdd = (props) => {
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
      props.dispatch({
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