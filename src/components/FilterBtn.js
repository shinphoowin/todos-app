import React from "react";

const FilterBtn = ({ filter, setFilter, activefilter }) => {
  return (
    <button
      onClick={() => setFilter(filter)}
      className={filter === activefilter ? "getFocus" : ""}
    >
      {filter}
    </button>
  );
};

export default FilterBtn;
