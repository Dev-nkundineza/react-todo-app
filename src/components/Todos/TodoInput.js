import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = ()=>{
 const dispatch = useDispatch();
 const [newTodo, setNewTodo]= useState();
 const onChangeHandler = event => setNewTodo(event.target.value);
 const handleClick = () => dispatch({
     type:'ADD_TODOS',
     payload:{
         id: Math.ceil(Math.random() * 100),
         label: newTodo,
     },
 })

 return(
<>
<input value={newTodo} type="text" onChange={onChangeHandler}/>
<button onClick={handleClick}>Add to list</button>
</>
 );
}

export default TodoInput;