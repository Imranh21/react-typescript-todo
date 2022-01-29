import React, { FC, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { TodoModel } from './models/todo'

const App: FC = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [todos, setTodos] = useState<TodoModel[]>([])

  return (
    <div>
      <TodoForm inputValue={inputValue} setInputValue={setInputValue} setTodos={setTodos} todos={todos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
