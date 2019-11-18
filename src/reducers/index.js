export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

export const todoReducer = (state, action) => {
  switch (action.type){
    case "ADD_ITEM":
      return {...state, item: action.payload}
    case "TOGGLE_DONE":
      return {...state, completed: !state.completed}
    default:
      return state
  }
}