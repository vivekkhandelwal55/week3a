import React, { useState } from 'react';
import "../styles/style.css"

export default function TodoForm() {
    const [isActive, setIsActive] = useState(false);
    const [todo, setTodo] = useState();

    function handleSubmit(e) {
        if (todo !== "") {
            //make api call here
            setTodo("")
            setIsActive(false);
        }
        e.preventDefault();
    }

    function handleOnChangeOfInput(e) {
        if (e.target.value === "") {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
        setTodo(e.target.value)
    }


    return (
        <form >
            <div className="container">
                <div className="input-col">
                    <input
                        className="text-area"
                        name='choreDesc'
                        type='text'
                        value={todo}
                        placeholder='Add Todo'
                        onChange={e => { handleOnChangeOfInput(e) }} />
                    <button
                        type="button"
                        className="button-input"
                        onClick={handleSubmit}
                        disabled={!isActive}
                        style={{ background: isActive ? '#2F80ED' : '#76a3df' }}>Add Todo</button>
                </div>
            </div>
        </form>
    )
}