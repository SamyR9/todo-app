import TodoCard from "./TodoCard"

function TodoList(props) {

  const { todos, deleteTodo, editTodo } = props
  
  return (
    <div>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex} >
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </div>
  )
}

export default TodoList