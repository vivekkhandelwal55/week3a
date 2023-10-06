import { NavLink, Routes, Route, BrowserRouter } from 'react-router-dom';
import "./styles/style.css"

//pages
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';
import CompletedTodo from './pages/CompletedTodo';
import NavBar from './comps/nav/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/add-todo" element={<AddTodo/>} />
            <Route path="/completed-todo" element={<CompletedTodo/>} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
  );
}

export default App;
