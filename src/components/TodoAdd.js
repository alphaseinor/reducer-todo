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

  const handleClear = () => {
    props.dispatch({type: 'CLEAR_COMPLETED_ITEMS'})
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
      <button
          onClick = {handleClear}
        >Remove Completed Items</button>
    </form>
  )
}

export default TodoAdd