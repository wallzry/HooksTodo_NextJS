import useInputState from "../hooks/useInputState"

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("")
  return (
    <div>
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
          placeholder="Add New Todo"
        />
      </form>
    </div>
  )
}

export default TodoForm
