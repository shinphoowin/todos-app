import React, { createRef, useState } from "react";

const Todo = ({ todo, dispatch }) => {
  const [show, setShow] = useState(false);
  const ipRef = createRef();

  const EditUi = ({ todo }) => {
    return (
      <div className="updateForm">
        <div className="ui input small" style={{ marginRight: 4 }}>
          <input type="text" placeholder={todo.name} ref={ipRef} />
        </div>

        <button
          className="ui black button"
          onClick={() => {
            dispatch({
              type: "UPDATE_TODO",
              id: todo.id,
              name: ipRef.current.value,
            });
            setShow(false);
          }}
        >
          update
        </button>
        <button onClick={() => setShow(false)} className="ui red button">
          cancel
        </button>
      </div>
    );
  };

  return (
    <div>
      {show ? <EditUi todo={todo} /> : ""}

      <div className="ui vertical steps fullWidth">
        <div className="completed step">
          <div>
            <i
              aria-hidden="true"
              className={
                todo.completed
                  ? "large check circle icon"
                  : "large check circle outline icon"
              }
              onClick={(e) =>
                dispatch({
                  type: "COMPLETE_TODO",
                  id: todo.id,
                  completed: !todo.completed,
                })
              }
            ></i>
            <label>{todo.name}</label>
          </div>
          &nbsp;&nbsp;
          <div className="forcemovetoRight">
            <i
              aria-hidden="true"
              className="large black pencil icon"
              onClick={() => setShow(true)}
            ></i>
            <i
              aria-hidden="true"
              className="large times circle icon red"
              onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Todo };
