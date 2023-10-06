import React from "react";
import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';
import "../nav/NavBarStyle.css"


export default function NavBar() {
    return <nav className="nav-bar">
        <a href="/" className="nav-logo">Todo</a>
        <div>
            <ul className="nav-list">
                <li> <NavLink className="nav-action-item" to="/">Home</NavLink> </li> <li> <NavLink className="nav-action-item" to="/add-todo">Add Todo</NavLink> </li>
                <li> <NavLink className="nav-action-item" to="/completed-todo">Completed Todo</NavLink> </li>
            </ul>
        </div>
    </nav>
}
// 