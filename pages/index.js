import { useEffect, useState } from "react"
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
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
    <Paper
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
      <Grid
        container
        justify="center"
        direction="column"
        style={{ marginTop: "1rem" }}
      >
        <Grid item xs={1} md={1} lg={1}></Grid>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </Grid>
    </Paper>
  )
}

export default index
