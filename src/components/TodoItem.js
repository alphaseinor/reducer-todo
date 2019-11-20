import React from "react"

const TodoItem = props => {
  console.log(`TodoItem props ${props}`)

  const checkboxHandler = () =>{
    if(!props.item.completed){
      return 'Click To Complete'
    }
    return 'Completed'
  }
  return(
    <div key={props.item.id}>
      <h3>{props.item.item}</h3>
      <button>
        {checkboxHandler()}
      </button>
    </div>
  )
}

export default TodoItem