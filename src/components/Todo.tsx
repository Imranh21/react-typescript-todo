import React, { FC } from 'react'
import { TodoModel } from '../models/todo'

interface Props{
    todo: TodoModel
    removeTodo: (value: number) => void
}

const Todo: FC<Props> = ({todo, removeTodo}) => {
    const {id, text} = todo
    return (
        <div>
            <p>{text}</p>
            <button>Edit</button>
            <button onClick={() => removeTodo(id)}>Delete</button>
        </div>
    )
}

export default Todo
