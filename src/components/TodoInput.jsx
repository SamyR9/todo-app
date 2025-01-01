import { useState } from "react"

const TodoInput = (props) => {

  const { addTodos, todoValue, setTodoValue } = props

  return (
    <header>
      <input placeholder="Enter task" value={todoValue} onChange={(e) => {
        setTodoValue(e.target.value)
      }}/>
      <button onClick={() => {
        addTodos(todoValue)
        setTodoValue('')
      }}>Add</button>
    </header>
  )
}

export default TodoInput