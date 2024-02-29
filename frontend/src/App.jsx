import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [ todos, setTodos ] = useState([]);


  const getTodos = () => {
    axios.get("http://localhost:3000/todos")
    .then((response) => {
      setTodos(response)
    })
  }
  useEffect(() => getTodos(), [])

  return (
    <>
     <CreateTodo />
     <Todos todos={todos}/>
    </>
  )
}

export default App
