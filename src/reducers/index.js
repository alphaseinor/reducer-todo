import {v1 as uuid} from 'uuid'

export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: uuid()
},{
  item: 'fix a bunch of code',
  completed: true,
  id: uuid()
}]

export const todoReducer = (state, action) => {
  switch (action.type){
    case "ADD_ITEM":
      return {...state, item: action.payload, completed: false, id: uuid()}
    case "TOGGLE_DONE":
      return {...state, completed: !state.completed}
    default:
      return state
  }
}