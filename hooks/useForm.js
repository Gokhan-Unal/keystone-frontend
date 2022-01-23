/** This is a hook that handles input events */
import React, { useEffect, useState } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);
  const init = Object.values(initialState).join('');

  useEffect(() => {
    setInputs(initialState);
  }, [init]);

  function handleChange(e) {
    let { type, name, value, files } = e.target; // get the name and value of the input
    if (type === 'number') {
      console.log(type);
      value = parseInt(value); // convert the value to an integer
    }
    if (type === 'file') {
      [value] = files; //e.target.files[0]; // get the file from the input
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
