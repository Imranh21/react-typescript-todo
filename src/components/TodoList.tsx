import React, { FC } from 'react'
import Todo from './Todo'
import {TodoModel} from '../models/todo'

interface Props{
    todos: TodoModel[]
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
}
const TodoList: FC<Props> = ({todos, setTodos}) => {

    const removeTodo = (value: number) => {
        const newTodos: TodoModel[] = todos.filter(todo => todo.id !== value)
        setTodos(newTodos)
    }
    
    return (
        <div>
            {todos.map((todo) => (
                <Todo todo={todo} key={todo.id} removeTodo={removeTodo}/>
            ))}
        </div>
    )
}

export default TodoList
