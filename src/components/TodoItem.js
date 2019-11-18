import React from "react"

const TodoItem = props => {
  console.log(props)
  return(
    <div key={props.id}>
      <h3>Item</h3>
      <button>
        Checkbox
      </button>
    </div>
  )
}

export default TodoItem