import { useState } from "react"
import "./styles.css"
import { NewItem } from "./components/NewItem"
import { TodoList } from "./components/TodoList"
export default function App() {

  const [todos, setTodos] = useState([])

  function addTodo(tittle) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), tittle, completed: false
        },
      ]
    }
    )
  }


  return (
    <>
      <NewItem onSubmit={addTodo} />

      <h1 className="header">To Do List</h1>
      <TodoList />

    </>
  )

}