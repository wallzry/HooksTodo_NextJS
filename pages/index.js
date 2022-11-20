import { useEffect, useState } from "react"
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm"
import { v4 as uuidv4 } from "uuid"
import Head from "next/head"
import { AiOutlineOrderedList } from "react-icons/ai"

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
      <Head>
        <title>SILASF Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-main h-16 w-full relative">
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white h-12 flex flex-col">
          <h1 className="text-main px-1 text-3xl w-full text-center">SILASF</h1>
          <div className="bg-main h-4 w-full flex items-center justify-center">
            <p className="text-white w-full text-center text-xxs">
              Digital Business Experts
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="text-2xl mx-auto text-center h-12 w-12 rounded bg-main flex justify-center items-center">
          <AiOutlineOrderedList className="text-4xl shrink-0 grow-0 text-white" />
          {/* <p className="text-white">Todo</p> */}
        </div>
        <p className="text-sm text-gray-400 italic text-center">
          No registration. No installation. No data collected. Enjoy Simplicity.
        </p>
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
