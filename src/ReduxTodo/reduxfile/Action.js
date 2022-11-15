import axios from 'axios'
export const  ADD_TODO_SUCCESS="ADD_TODO_SUCCESS"
export const ADD_TODO_FAILURE="ADD_TODO_FAILURE"
export const ADD_TODO_STARTED="ADD_TODO_STARTED"
export const DELETE_TODO="DELETE_TODO"
export const FETCH_TODO="FETCH_TODO"
export const fetchData=(todosData)=>{
  return{
    type:FETCH_TODO,
    payload:todosData
  }
} 

export const addTodo = ( {title, userId }) => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .post(`https://jsonplaceholder.typicode.com/todos?`, {
        title:title,
        userId:userId,
        flag: false
      })
      .then(res => {
        console.log(res.data);
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const addTodoStarted=()=>{
    return{
        type:ADD_TODO_STARTED
    }
}
export  const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    inpval:{...todo}, 
  });

 export const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
      error
    }
  });
 export const deleteTodo = ind => ({
    type:DELETE_TODO,
    index:ind
  })