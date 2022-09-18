import React from "react";
import Todo from "./todo";

const ToDoList = ({ todo, setTodo }) => {
//    console.log(todo);
    return (
        <div className="todolist-container">
            <ul className="todo-list">
                {todo.map(todo => (
                    <Todo 
                        setTodo={setTodo}
                        todo={todo}
                        key={todo.id}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;