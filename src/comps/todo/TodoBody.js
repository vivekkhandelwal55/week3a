import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import LoadingComponent from "../common/Loading"

export default function TodoBody({ url }) {

    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData();
    }, []);


    function fetchData() {
        axios.get(url)
            .then((response) => {
                setIsLoading(false);
                setTodos(response.data);
            })
            .catch((error) => {
                setIsLoading(false);
                console.error('Error fetching data:', error);
            });
    }

    function updateTodo(todo) {
        axios.put(url + `/${todo.id}`, {
            title: todo.title,
            completed: todo.completed
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function deleteTodo(todo) {
        axios.delete(url + `/${todo.id}`).then((response) => {
            setIsLoading(true);
            fetchData();
        }).catch((error) => {
            setIsLoading(false);
            console.error('Error fetching data:', error);
        });
    }

    return <div>
        {
            isLoading ?
                <LoadingComponent />
                :
                <TodoList todoList={todos} updateTodo={updateTodo} deleteTodos={deleteTodo} />
        }
    </div>
}

