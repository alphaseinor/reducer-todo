import React, {useReducer} from "react"
import {initialState, todoReducer} from '../reducers/todoReducer.js'
import TodoAdd from './TodoAdd.js'
import TodoItem from './TodoItem.js'

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  

  //console.log(state[0].id)

  state.map(x => console.log(x.id))

  return(
    <section>
      <article className="todo-add">
        <TodoAdd dispatch = {dispatch}/>
      </article>
      <article className="todo-list">
          {state.map( todoItem => (<TodoItem 
            key = {todoItem.id}
            item = {todoItem}
            dispatch = {dispatch}
          />))}
      </article>
    </section>
  )
} 

export default Todo