import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodoStarted } from '../reduxfile/Action'
import { addTodoSuccess } from '../reduxfile/Action'
import { addTodoFailure } from '../reduxfile/Action'
import { deleteTodo } from '../reduxfile/Action'
import { addTodo } from '../reduxfile/Action'
import { fetchData } from '../reduxfile/Action'
const TodoList = () => {
     const todosData=useSelector((state)=>state.todos)
     const dispatch=useDispatch();
     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then(res=>{
            console.log(res.data);
            dispatch(fetchData(res.data))
        })
     },[])
     const addTodoList=()=>{  
       let inpData=document.getElementById("inpTodo").value;
              dispatch(addTodo({title:inpData,userid:5}));
              document.getElementById("inpTodo").value=""
     }
    const itemDeleted=(e)=>{
      let index=e.target.getAttribute("ind")
      dispatch(deleteTodo(index));

    }
    return (
    <div id="outer">
        <div id="todo_box">
            <input placeholder='Add Items....' id="inpTodo" type="text" autofocus/>
            <button id="btnSubmit" onClick={addTodoList}>Submit</button>
        </div>
        {todosData.map((item,i)=>{
            return(
                <>
                <div id="todo_list">
            <input className='checkbox' type="checkbox"/><p>{item.title}</p><button className='btnDelete' ind={i} onClick={itemDeleted}>Delete</button>
        </div>
                </>
            )
        })}
    </div>
  )
}

export default TodoList