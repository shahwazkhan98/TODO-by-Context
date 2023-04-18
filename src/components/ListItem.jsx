import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { BsFillTrashFill } from "react-icons/bs";

function ListItem({todo}) {
  
  const {deleteTodo , editTodo} = useContext(GlobalContext)
  
  return (
    <li className="list-group-item rounded-0 mt-3">
        {todo.text}
        <button className="btn btn-danger btn-sm float-end rounded-0" onClick={()=>deleteTodo(todo.id)}>Delete <BsFillTrashFill/> </button>
        <button className="btn btn-warning btn-sm float-end rounded-0" onClick={()=>editTodo(todo)}>Update</button>
    </li>
  )
}

export default ListItem
