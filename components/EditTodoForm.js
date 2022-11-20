import useInputState from "./../hooks/useInputState"

const EditTodoForm = ({ id, task, editTodo, toggleIsEditing }) => {
  const [value, handleChange, reset] = useInputState(task)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        editTodo(id, value)
        reset()
        toggleIsEditing()
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <input
        type="text"
        className="w-full border border-black p-2"
        value={value}
        onChange={handleChange}
      />
    </form>
  )
}

export default EditTodoForm
