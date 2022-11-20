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
        <>
          <input
            type="checkbox"
            checked={completed}
            onClick={() => toggleTodo(id)}
          />
          <p style={{ textDecoration: completed ? "line-through" : "none" }}>
            {task}
          </p>
          <div className="flex items-center">
            <div onClick={() => removeTodo(id)}>
              <AiFillDelete />
            </div>
            <div onClick={toggleIsEditing}>
              <AiFillEdit />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Todo
