import { useEffect, useState } from "react"
import "./styles.css"
import ItemForm from "./ItemForm"
import ItemList from "./ItemList"

export default function App(){

  const [todoList, setTodoList] = useState(() => 
  {
    const localValue = localStorage.getItem("Items")
    if(localValue === null) return []
    return JSON.parse(localValue)
  })
    
  useEffect(()=> {
    localStorage.setItem("Items", JSON.stringify(todoList))
  },[todoList])

  function addTodoItem(item){
      setTodoList(currentTodoList => {
      return [...currentTodoList,{id: crypto.randomUUID(),title: item, isCompleted: false},]
    })
  }


  function toggleTodo(id, completed) {
    setTodoList(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }


  function deleteItem(id) {
      setTodoList(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }

  return(
  <>
  <ItemForm onSubmit = {addTodoItem} />
  <h1 className="header">To Do List</h1>
  <ItemList todoList={todoList} toggleTodo={toggleTodo} deleteItem={deleteItem} />
  </> 

    
   

  )
  
  
 
}