import React from "react";
import Todo from "./todo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    //    console.log(todo);
    return (
        <div className="todolist-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;