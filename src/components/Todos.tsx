import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const Todos = () => {
    const [todos, setTodos] = useState<Array<ITodoType>>([]);
    const handle = (todo: ITodoType) => {
        if (!todo.text) return
        const newTodos: Array<ITodoType> = [todo, ...todos];
        setTodos(newTodos);
    }
    const deleteTodos = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    const edit = (id: number, newText: string) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.text = newText;
            };
            return todo
        }));
    };
    const setCompleted = (id: number) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo
        }))
    };

    return (
        < div >
            <div className='todo-form'>
                <TodoForm handle={handle} />
            </div>
            <div>
                {
                    todos.map((todo) => <Todo
                        text={todo.text}
                        completed={todo.completed}
                        id={todo.id} key={todo.id}
                        deleteTodos={deleteTodos}
                        edit={edit}
                        setCompleted={setCompleted}
                    />)
                }
            </div>

        </div >
    )

}

export default Todos;

export type ITodoType = {
    id: number
    text: string
    completed: boolean
}
