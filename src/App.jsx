import { useState } from "react"
import "./styles.css"
export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), tittle: newItem, completed: false
        },
      ]
    }
    )
    setNewItem("")
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" id="item" />
        </div>
        <button className="btn">ADD</button>
      </form>
      <h1 className="header">To Do List</h1>
      <ul className="list">
        {todos.map(todo => {
          return <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} />
              {todo.tittle}
            </label>
            <button className="btn btn-danger">Remove</button>
          </li>
        })}


      </ul>
    </>
  )

}