import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";

// Functions
const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <FontAwesomeIcon icon={faClipboardCheck} />
            </button>
            <button onClick={deleteHandler} className="delete-btn">
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>

    );
};

export default Todo;