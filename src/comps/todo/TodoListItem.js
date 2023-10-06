import React, { useState } from "react";
import "./TodoStyle.css"

export default function Todo({ todo, updateTodo, deleteTodo ,key}){

    const [isChecked,setIsChecked] = useState(todo.completed);

    function update(todo){
        setIsChecked(todo.completed);
        updateTodo(todo);
    }

    return (
        <li className='todo-item' key={key}>
            <div className="item">
                <div className="leading">
                    <input key={todo.id} type="checkbox" className="check-button" checked={isChecked} onChange={() => update(todo)}></input>
                    <span>{todo.title}</span>
                </div>
                <i className="material-icons delete-item-button" onClick={() => deleteTodo(todo)}>delete</i>
            </div>
        </li>
    )
}