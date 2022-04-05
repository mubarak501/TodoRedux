import * as Types from "./types";
const initialState = {
  todos: [],
  deleted: [],
  update: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case Types.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case Types.UPDATE_DATA:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id === action.payload),
      };
    default:
      return state;
  }
};
export default reducer;
