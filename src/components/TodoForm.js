import React, { useRef } from "react";

const TodoForm = ({ dispatch }) => {
  const ipRef = useRef();
  return (
    <div>
      <div className="ui input huge fullWidth">
        <input
          type="text"
          ref={ipRef}
          placeholder="add your todo task..."
          onKeyUp={(e) => {
            e.preventDefault();
            if (ipRef.current.value === "") return;
            if (e.code === "Enter") {
              dispatch({ type: "ADD_TODO", name: ipRef.current.value });
              ipRef.current.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export { TodoForm };
