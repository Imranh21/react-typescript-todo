import React, {Dispatch, SetStateAction, FormEvent, FC} from 'react'
import { TodoModel } from '../models/todo'

interface Props{
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
    setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>
    todos: TodoModel[]
}


const TodoForm: FC<Props> = ({setInputValue, setTodos, todos, inputValue}) => {
    const addTodo = (e: FormEvent) => {
        e.preventDefault()
        const todo = {
            id: Math.random(),
            text: inputValue,
        }
        setTodos([todo, ...todos])
        setInputValue("")
    }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="write what to todo" onChange={handleInputChange}/>
                <button type='submit'>Add Todo</button>
            </form>
            
        </div>
    )
}

export default TodoForm
