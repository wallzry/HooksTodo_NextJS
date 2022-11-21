import { useEffect, useState } from "react"
import TodoList from "../components/TodoList"
import TodoForm from "../components/TodoForm"
import { v4 as uuidv4 } from "uuid"
import Head from "next/head"
import { AiOutlineOrderedList } from "react-icons/ai"

const index = () => {
  const initialTodos = []

  const currentYear = new Date().getFullYear()

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
    <div className="p-0 m-0 bg-gray-50">
      <Head>
        <title>SILASF Todo App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <div className="min-h-screen mb-8">
        <div className="bg-main h-16 w-full relative">
          <a
            href="https://silasf.com"
            target="_blank"
            className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white h-12 flex flex-col"
          >
            <h1 className="text-main px-1 text-3xl w-full text-center">
              SILASF
            </h1>
            <div className="bg-main h-4 w-full flex items-center justify-center">
              <p className="text-white w-full text-center text-xxs">
                Digital Business Experts
              </p>
            </div>
          </a>
        </div>
        <div className="mt-12">
          <div className="text-2xl mx-auto text-center h-12 w-12 rounded bg-main flex justify-center items-center">
            <AiOutlineOrderedList className="text-4xl shrink-0 grow-0 text-white" />
          </div>
          <p className="text-main text-center text-xxs">Todo App</p>
          <p className="mb-8 text-xxs text-gray-400 capitalize italic text-center">
            No registration. No installation. No data collection. Enjoy
            Simplicity.
          </p>
        </div>
        <div className="flex max-w-screen-md w-11/12 mx-auto flex-col justify-center mt-3">
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
      <footer className="mt-2 relative pb-4 bg-white border-t-2 border-main text-gray-500 pt-7">
        <a
          href="https://silasf.com"
          target="_blank"
          className="absolute -top-3 shadow left-1/2 transform -translate-x-1/2 bg-white h-6 w-16 flex flex-col"
        >
          <p className="text-main text-sm w-full text-center">SILASF</p>
          <div className="bg-main h-1 w-16 flex items-center justify-center">
            <p className="text-white text-xxxxs">Digital Business Experts</p>
          </div>
        </a>
        <div className="max-w-screen-md mx-auto">
          <p className="italic w-11/12 mx-auto text-sm text-center text-gray-400">
            Besides owning{" "}
            <a target="_blank" href="https://glxbal.com/" className="underline">
              GLXBAL®
            </a>{" "}
            and establishing new businnesses, we offer individual ready to go
            solutions for any specific needs.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 text-xs mt-2">
          <a href="https://silasf.com/legal" target="_blank">
            Legal{" "}
          </a>
          <a href="https://silasf.com/privacy" target="_blank">
            Privacy
          </a>
          <a href="https://silasf.com/terms" target="_blank">
            Terms
          </a>
        </div>
        <p className="mt-4 text-xxs text-center">© SILASF {currentYear}</p>
        <p className="mt-2 text-xxs text-center text-gray-500 italic font-thin">
          The best way to predict the future is to create it.
        </p>
      </footer>
    </div>
  )
}

export default index
