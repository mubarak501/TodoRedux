import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import RemoveIcon from "@material-ui/icons/Remove";

import * as Types from "./types";
import { Button } from "@material-ui/core";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [storeRemove, setStoreRemove] = useState("");

  const handleRemove = (id) =>
    dispatch({
      type: Types.DELETE_TODO,
      payload: id,
    });

  console.log({ todos });

  if (!todos.length) {
    return <p>NO TODOS</p>;
  }
  const HandleUpdate = (id) => {
    dispatch({
      type: Types.UPDATE_DATA,
      payload: id,
    });
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li style={{ display: "flex" }}>
            <div style={{ width: "100px" }}>
              <button
                onClick={() => {
                  HandleUpdate();
                }}
              >
                Update
              </button>
            </div>

            {todo.label}

            <div>
              <RemoveIcon
                style={{ marginLeft: "10px" }}
                onClick={() => handleRemove(todo.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  console.log(newTodo);
  const handleChange = (event) => setNewTodo(event.target.value);
  const handleClick = (e) =>
    dispatch({
      type: Types.ADD_TODO,
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });

  return (
    <>
      <input
        label="Todos"
        value={newTodo}
        onChange={handleChange}
        type="text"
        style={{ height: "20px", outlined: "none" }}
      ></input>
      <Button
        type="submit"
        style={{ backgroundColor: "#cf9d71", marginTop: "8px" }}
        onClick={handleClick}
      >
        ADD TODO
      </Button>
    </>
  );
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
      className="App"
    >
      <div
        style={{
          display: "flex",
          backgroundColor: "#1d1d51de",
          color: "white",
          justifyContent: "center",
          flexDirection: "column",
          width: "600px",
          height: "600px",
          alignItems: "center",
        }}
      >
        <TodoInput />
        <Todos />
      </div>

      {/* <div>
        {Data.map((items) => {
          return (
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <div>{items.title}</div>
                <div></div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  marginTop: "10px",
                }}
              >
                <div></div>
                <div>{items.title}</div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
