import React, { useState } from 'react';
import { IoIosArrowDropdown, IoIosCloseCircleOutline, IoIosColorWand } from "react-icons/io";
import '../index.css';

const Todo: React.FC<ITodoProps> = ({ text, id, completed, deleteTodos, edit, setCompleted }) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [newText, setNewText] = useState<string>('')

    return (
        editMode ?
            <div className='todo todo-edit'>
                <input
                    type="text"
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setNewText(e.currentTarget.value)}
                    value={newText} className='input-edit'
                    placeholder={text}
                    autoFocus
                    onBlur={() => {
                        setEditMode(!editMode)
                        edit(id, newText ? newText : text)
                    }
                    }
                />
                <IoIosArrowDropdown className='edit' size={24} color='white' onClick={() => {
                    setEditMode(!editMode);
                    edit(id, newText)
                }} />
            </div >
            :
            <div className={completed ? 'todo completed' : 'todo'} >
                <span className='todo-text' >{text}</span>
                <div>
                    <IoIosArrowDropdown onClick={() => setCompleted(id)} size={24} color='white' className='edit' title='Finish todo' />
                    <IoIosCloseCircleOutline size={24} onClick={() => deleteTodos(id)} className='edit' title='Delete todo' />
                    <IoIosColorWand className='edit' title='Edit todo' size={24} onClick={() => {
                        setEditMode(!editMode)
                        setNewText(text)
                    }
                    } />
                </div>
            </div >
    )
}

export default Todo;

type ITodoProps = {
    text: string
    id: number
    completed: boolean
    deleteTodos: (id: number) => void
    edit: (id: number, newText: string) => void
    setCompleted: (id: number) => void
}
