import useInputState from "../hooks/useInputState"
import { AiOutlineEnter } from "react-icons/ai"

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("")
  return (
    <div className="relative bg-orange-600">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}
      >
        <input
          className="w-full border border-black p-2"
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="+ Todo"
        />
        <AiOutlineEnter className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2 text-black bg-gray-200 rounded text-2xl p-1" />
      </form>
    </div>
  )
}

export default TodoForm
