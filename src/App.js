import React, { useState } from "react";
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
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
       <h1>To Do List</h1>
      </header>
      <Form 
        inputText={inputText}
        todo={todo}
        setTodo={setTodo}
        setInputText={setInputText}
      />
      <ToDoList
        setTodo={setTodo}
        todo={todo}
      />
    </div>
  );
}

export default App;
