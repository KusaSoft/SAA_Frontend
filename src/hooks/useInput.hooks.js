import React, { useState } from "react";

export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  return [value, handleChange];
}
