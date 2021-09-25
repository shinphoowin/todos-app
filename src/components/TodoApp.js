import React from "react";

const TodoApp = ({ children }) => {
  return (
    <div className="container">
      <h1 className="ui center aligned disabled header">
        todos <em style={{ fontSize: 19 }}>(by useReduer Hook)</em>
      </h1>
      {children}
    </div>
  );
};

export default TodoApp;
