import React, { memo } from "react";
import { Todo } from "./Todo";

const Todos = memo(({ todos, dispatch }) =>
  todos.map((todo) => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)
);

export { Todos };
