import { ADD_TODO_STARTED } from "./Action";
import { ADD_TODO_SUCCESS } from "./Action";
import { ADD_TODO_FAILURE } from "./Action";
import { DELETE_TODO } from "./Action";
import { FETCH_TODO } from "./Action";
const initialState = {
  flag: false,
  todos: [],
  error: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO_STARTED:
      return {
        ...state,
        flag: true,
      };
    case ADD_TODO_SUCCESS:
      console.log(action.inpval, state.todos);
      return {
        ...state,
        todos: [...state.todos, action.inpval],
        flag: false,
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        flag: false,
        error: action.payload.error,
      };
    case DELETE_TODO:
      let data = state.todos;
      data.splice(action.index, 1);
      return {
        ...state,
        todos: [...data],
      };
    default:
      return state;
  }
};
export default reducer;
