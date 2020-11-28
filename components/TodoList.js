import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import { v4 as uuidv4 } from 'uuid'
import Divider from '@material-ui/core/Divider'
import Todo from '../components/Todo'

const TodoList = ({ todos, removeTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
        <List>
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
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    )
  return null
}

export default TodoList
