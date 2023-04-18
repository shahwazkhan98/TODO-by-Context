import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context/GlobalContext"

function Form() {
 
  const {saveTodo , edit , updateTodo} = useContext(GlobalContext)

  const [text , setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if(edit.isEdit){
      updateTodo(edit.todo.id , text)
    }else{
      saveTodo(text)
    }
    setText("")
  }

  useEffect(()=>{
    setText(edit.todo.text)
  },[edit])
  

    return (
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input value={text} type="text" className="form-control rounded-0"  required onChange={(e)=>setText(e.target.value)}/>
  </div>
  <button type="submit" className="btn save-btn w-100 rounded-0">Save</button>
</form>
  )
}

export default Form
