import { useEffect, useState } from "react"
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm"
import { v4 as uuidv4 } from "uuid"

const index = () => {
  const initialTodos = []

  const [todos, setTodos] = useState(initialTodos)

  useEffect(() => {
    const todos = window.localStorage.getItem("todos")
    if (todos) {
      setTodos(JSON.parse(todos))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])
  }
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId)
    setTodos(updatedTodos)
  }
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }
  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    )
    setTodos(updatedTodos)
  }
  return (
    <div
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <div className="bg-main">
        <p>Super Simple Todo App</p>
      </div>
      <div className="flex flex-col justify-center mt-3">
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  )
}

export default index
