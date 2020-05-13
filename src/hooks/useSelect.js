import React, { useState } from "react";

const useSelect = (initialState, options) => {
  //state of custom hook
  const [state, setState] = useState(initialState);

  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {options.map((oneOption) => (
        <option key={oneOption.value} value={oneOption.value}>
          {oneOption.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};

export default useSelect;
