import { useReducer, useState, Fragment } from "react";
import FilterBtn from "./components/FilterBtn";
import TodoApp from "./components/TodoApp";
import { TodoForm } from "./components/TodoForm";
import { Todos } from "./components/Todos";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          saving: true,
          name: action.name,
          completed: false,
        },
      ];
    case "DELETE_TODO":
      let indexofRemovedItem = state.findIndex((st) => st.id === action.id);
      if (indexofRemovedItem === -1) {
        return state;
      }
      return [
        ...state.slice(0, indexofRemovedItem),
        ...state.slice(indexofRemovedItem + 1),
      ];
    case "UPDATE_TODO":
      return state.map((st) =>
        st.id === action.id ? { ...st, name: action.name } : st
      );
    case "COMPLETE_TODO":
      return state.map((st) =>
        st.id === action.id ? { ...st, completed: action.completed } : st
      );
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [activefilter, setFilter] = useState("All");

  const FILTER_MAP = {
    All: () => true,
    Active: (todo) => !todo.completed,
    Completed: (todo) => todo.completed,
  };

  const FilterBtns = () =>
    Object.keys(FILTER_MAP).map((filter) => (
      <FilterBtn
        key={filter}
        filter={filter}
        setFilter={setFilter}
        activefilter={activefilter}
      />
    ));
  const filteredTodos = state.filter(FILTER_MAP[activefilter]);
  const todoNoun = () => (filteredTodos.length > 1 ? "tasks" : "task");

  return (
    <Fragment>
      <TodoApp>
        <TodoForm dispatch={dispatch} />
        {state.length > 0 ? <FilterBtns /> : ""}

        {filteredTodos.length > 0 ? (
          <div className="ui tag labels">
            <em className="ui label">
              {`${activefilter} ${filteredTodos.length} ${todoNoun()}`}
            </em>
          </div>
        ) : (
          ""
        )}

        <Todos todos={filteredTodos} dispatch={dispatch} />
      </TodoApp>
    </Fragment>
  );
};

export default App;
