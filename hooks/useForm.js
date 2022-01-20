/** This is a hook that handles input events */
import React, { useState } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);

  function handleChange(e) {
    let { type, name, value, files } = e.target; // get the name and value of the input
    if (type === 'number') {
      value = parseInt(value); // convert the value to an integer
    }
    if (type === 'file') {
      value[0] = files; //e.target.files[0]; // get the file from the input
    }
    setInputs({ ...inputs, [name]: value }); // set the input value to the state and dont mutate the state
  }
  function resetForm() {
    setInputs(initialState); // reset the form to the initial state
  }

  return {
    handleChange,
    resetForm,
    inputs,
  };
}
