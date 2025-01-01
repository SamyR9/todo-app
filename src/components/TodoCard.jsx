function TodoCard(props) {

  const { children, deleteTodo, index, editTodo } = props 

  return (
    <div>
      <li className="todoItem">

        { children }
        <div className="action ">
          <button onClick={() => {
            editTodo(index)
          }}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => {
            deleteTodo(index)
          }}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    </div>
  )
}

export default TodoCard