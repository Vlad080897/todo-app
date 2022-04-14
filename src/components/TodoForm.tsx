import { Input } from 'antd';
import React, { useState } from 'react';
import '../index.css';
import { ITodoType } from './Todos';

const { Search } = Input;

const TodoForm: React.FC<{ handle: (todo: ITodoType) => void }> = ({ handle }) => {
    const [input, setInput] = useState('')
    const [massege, setMessage] = useState<boolean>(false)

    const onSearch = (value: string) => {
        if (value.length === 0) {
            setMessage(true);
        };
        const newTodo = {
            id: Math.floor(Math.random() * 10000),
            text: value,
            completed: false
        };
        handle(newTodo);
        setInput('');
    };

    return (
        <div className='todo_input'>
            <Search
                placeholder="Write your todo here"
                enterButton="Add Todo"
                size="large"
                onSearch={onSearch}
                value={input}
                onChange={(e: React.FormEvent<HTMLInputElement>) => {
                    setInput(e.currentTarget.value)
                    setMessage(false);
                }
                }
                className='input-text'
            />
            {massege && <div>*Write your todo</div>}
        </div>
    )
}

export default TodoForm;
