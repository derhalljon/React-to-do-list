import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";


const Form = ({ setInputText, todo, setTodo, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodo ([
            ...todo,
            { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
    };
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
                <select name="todo" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </div>
        </form>
    );
};

export default Form