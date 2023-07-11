


export function TodoList({ todos }) {


    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }
    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
    }


    return <ul className="list">
        {todos.map(todo => {
            return <li key={todo.id}>
                <label>
                    <input type="checkbox" checked={todo.completed}
                        onChange={e => toggleTodo(todo.id, e.target.checked)} />
                    {todo.tittle}
                </label>
                <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Remove</button>
            </li>
        })}


    </ul>
}