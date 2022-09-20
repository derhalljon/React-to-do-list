import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

// Functions
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input
                value={inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <FontAwesomeIcon icon={faSquarePlus} />
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
};

export default Form;