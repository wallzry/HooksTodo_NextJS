import { AiFillDelete, AiFillEdit, AiOutlineEnter } from "react-icons/ai"
import useInputState from "./../hooks/useInputState"

const EditTodoForm = ({ id, task, editTodo, toggleIsEditing }) => {
  const [value, handleChange, reset] = useInputState(task)

  return (
    <form
      className="w-full flex items-center"
      onSubmit={(e) => {
        e.preventDefault()
        editTodo(id, value)
        reset()
        toggleIsEditing()
      }}
    >
      <div className="flex h-auto w-full items-center gap-2 mr-2 relative">
        <input
          type="checkbox"
          className="accent-main h-6 w-6 cursor-pointer shrink-0 grow-0 border-0 border-gray-200"
          disabled
        />
        <input
          type="text"
          className="border rounded text-sm border-gray-200 p-2 uppercase break-words w-full"
          value={value}
          onChange={handleChange}
          autoFocus
        />
        <AiOutlineEnter className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-black bg-gray-200 rounded text-2xl p-1" />
      </div>
      <div className="flex items-center gap-4">
        <div className="cursor-pointer text-gray-200">
          <AiFillEdit />
        </div>
        <div className="cursor-pointer text-gray-200">
          <AiFillDelete />
        </div>
      </div>
    </form>
  )
}

export default EditTodoForm

{
  /* <div className="w-full flex items-center justify-between">
          <div className="flex h-auto items-center gap-2">
            <input
              type="checkbox"
              className="accent-main h-6 w-6 cursor-pointer shrink-0 grow-0 border-0 border-gray-200"
              defaultChecked={completed}
              onClick={() => toggleTodo(id)}
            />
            <p
              className={`max-w-screen-sm text-sm uppercase break-words ${
                completed ? "line-through text-main" : "no-underline text-black"
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
        </div> */
}
