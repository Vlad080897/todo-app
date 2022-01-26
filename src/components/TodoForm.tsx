import { Input } from 'antd';
import React, { useState } from 'react';
import { ITodoType } from './Todos';
import '../index.css'

const { Search } = Input;

const TodoForm: React.FC<{ handle: (todo: ITodoType) => void }> = ({ handle }) => {
    const [input, setInput] = useState('')

    const onSearch = (value: string) => {
        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            text: value,
            completed: false
        }
        handle(newTodo);
    }

    return (
        <div className='todo_input'>
            <Search
                placeholder="Add todo"
                enterButton="Add Todo"
                size="middle"
                onSearch={onSearch}
                value={input}
                onChange={(e: React.FormEvent<HTMLInputElement>) => setInput(e.currentTarget.value)}
                className='btn'
            />
        </div>
    )
}

export default TodoForm;
