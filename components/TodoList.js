import { v4 as uuidv4 } from "uuid"
import Todo from "../components/Todo"

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <div className="w-full">
        <div>
          {todos.map((todo, i) => (
            <div key={uuidv4()}>
              <Todo
                id={todo.id}
                task={todo.task}
                key={todo.id}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todos.length - 1 && (
                <div className="w-full border-b border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  return null
}

export default TodoList
