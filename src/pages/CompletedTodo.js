import React from "react";
import TodoBody from "../comps/todo/TodoBody";

export default function CompletedTodo() {

    return <TodoBody url="https://jsonplaceholder.typicode.com/todos?completed=true" />
}