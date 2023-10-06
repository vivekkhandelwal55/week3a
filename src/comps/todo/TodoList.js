import React from 'react';
import Todo from './TodoListItem';


export default function ({ todoList, deleteTodos, updateTodo }) {

    return (
        <ul>{
            todoList.map(todo => <Todo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodos} key={todo.id} />)
        }</ul>
    )
}