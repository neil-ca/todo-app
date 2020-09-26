import React from 'react'

type Todo = {
    _id: string
    todo: string
    complete: string
}

interface Values {
    id: string
}

const key = (index: number, type: string): string => type + index.toString()
export interface Props {
    todos: Array<Todo>
    onSubmit: (values: Values) => void
}
export const Todo: React.FC<Props> = (props: Props) => {
    return (
        <ul>
        {props.todos.map((item: Todo, index: number) =>
            <li key={key(index, 'li')}>{item.todo}</li>
            )}
        </ul>
    )
}
