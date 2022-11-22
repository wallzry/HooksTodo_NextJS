import useToggleState from "../hooks/useToggleState"
import EditTodoForm from "../components/EditTodoForm"
import { AiFillDelete, AiFillEdit } from "react-icons/ai"

const Todo = ({ id, task, completed, removeTodo, toggleTodo, editTodo }) => {
  const [isEditing, toggleIsEditing] = useToggleState(false)
  return (
    <div className="w-full flex items-center p-2 break-words min-h-12 overflow-hidden">
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleIsEditing={toggleIsEditing}
        />
      ) : (
        <div className="w-full flex items-center justify-between">
          <div className="flex h-auto items-center gap-2">
            <input
              type="checkbox"
              className="accent-red h-6 w-6 cursor-pointer shrink-0 grow-0 border-0 border-gray-200"
              defaultChecked={completed}
              onClick={() => toggleTodo(id)}
            />
            <p
              className={`max-w-screen-sm text-sm uppercase break-words ${
                completed ? "line-through text-red" : "no-underline text-main"
              }`}
            >
              {task}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div onClick={toggleIsEditing} className="cursor-pointer">
              <AiFillEdit />
            </div>
            <div onClick={() => removeTodo(id)} className="cursor-pointer">
              <AiFillDelete />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo
