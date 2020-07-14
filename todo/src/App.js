import React, { useState, useReducer } from "react";
import { initialState, reducer } from "./reducers/todoReducer";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (e) => {
    setInputValue(e.target.value);
  };

  const handleCompleted = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };

  // const filterTodos = () => {
  //   dispatch({ type: "FILTER_TODOS" });
  // };
  return (
    <div className="App">
      <div className="inputContainer">
        <h1 style={{ color: "#FFEEDD" }}>Redux</h1>
        <input value={inputValue} onChange={handleChanges} />
        <button
          onClick={() => dispatch({ type: "ADD_TODO", payload: inputValue })}
        >
          Add Todo
        </button>
        <button onClick={() => dispatch({ type: "FILTER_TODOS" })}>
          Clear Completed
        </button>
      </div>
      <div className="taskList">
        {state.map((todo) => (
          <div className="taskItems">
            <h3
              style={
                todo.completed
                  ? { textDecoration: "line-through", color: "#A5FFD6" }
                  : { textDecoration: "none" }
              }
            >
              {todo.item}
            </h3>
            <div class="buttonContainer">
              <button onClick={() => handleCompleted(todo.id)}>&#10003;</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
