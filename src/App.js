import React, { useState, useEffect } from "react";
import './App.css';
import Form from "./components/form";
import ToDoList from "./components/todolist";

/*
1. Add the day's date with automatic update
2. Selectable colour coding of each task.
Red = DO IT NOW
Yellow = DO IT THIS WEEK
Green = DO IT WHENEVER
*/
function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Use Effect
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true))
          break;
        case "incomplete":
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  // Save Locally
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
