import useToggleState from "../hooks/useToggleState"
import EditTodoForm from "../components/EditTodoForm"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggleIsEditing] = useToggleState(false)
  return (
    <div className="w-full flex items-center h-12">
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="accent-main"
              checked={completed}
              onClick={() => toggleTodo(id)}
            />
            <p
              className="max-w-screen-sm"
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div onClick={toggleIsEditing}>
              <AiFillEdit />
            </div>
            <div onClick={() => removeTodo(id)}>
              <AiFillDelete />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo
