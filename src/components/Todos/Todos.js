import React from "react";
import { useSelector,  useDispatch } from "react-redux";

const Todos = ()=>{
const dispatch = useDispatch();
const todos = useSelector(state=> state.todos);
const handleClick =id => dispatch({
    type:'DELETE_TODOS',
    payload: id,
});
 if(!todos || !todos.length){
     return(
         <p>NO TODOS</p>
     ); 
 }

 return(
     <ul>
         {todos.map(todo => <li onClick={()=> handleClick(todo.id)}>{todo.label}</li>)}
     </ul>
 );
}

export default Todos;