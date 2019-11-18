import {uuidv1 as uuid} from 'uuid/v1'

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: uuid
}

export const todoReducer = (state, action) => {
  switch (action.type){
    case "ADD_ITEM":
      return {...state, item: action.payload, completed: false, id: uuid}
    case "TOGGLE_DONE":
      return {...state, completed: !state.completed}
    default:
      return state
  }
}