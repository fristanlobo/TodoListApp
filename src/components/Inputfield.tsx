import React, { useRef } from 'react';
import '../components/styles.css'

interface InputfieldProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const Inputfield = ({ todo, setTodo, handleAdd }: InputfieldProps) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <form className='input'
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}>
            <input
                ref={inputRef}
                type='input'
                placeholder='Enter a Task' className='input_box'
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                className='input_submit' type='submit'
            >
                Go
            </button>
        </form>
    )
}

export default Inputfield