import React from "react"

const TodoItem = props => {
  
  const {item, handleToggle} = props

  const checkboxLabel = () =>{
    if(!item.completed){
      return 'Click To Complete'
    }
    return 'Completed'
  }

  return(
    <div key={item.id}>
      <h3>{item.item}</h3>
      <button
        onClick = {() => handleToggle(item.id)} 
      >
        {checkboxLabel()}
      </button>
    </div>
  )
}

export default TodoItem