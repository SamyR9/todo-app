import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [ todos, setTodos ] = useState([
    'Dance',
    'create project',
    'gratitude'
  ])

  const [ todoValue, setTodoValue ] = useState('')


  function persistData(todoList) {
    localStorage.setItem('todos', JSON.stringify({todos:todoList}))
  }

  function addTodos(newTodo) {
    let newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function editTodo(todoId) {
    const valueTobeEdited = todos[todoId]
    setTodoValue(valueTobeEdited)
    deleteTodo(todoId)
  }

  function deleteTodo(todoId) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex != todoId 
    } )
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  useEffect(() =>{
    if(!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])

  return (
    <main>
      <TodoInput addTodos={addTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo}/>
    </main>
  )
}

export default App
