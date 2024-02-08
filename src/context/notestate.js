import React, { useState } from 'react';
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const st = {
    "name": "avc",
    "value": "My new value"
  };
  const [state, setState] = useState(st);
  const [value, setValue] = useState('');
  const update = ({ name, value}) => {
    setState({
      "name": name,
      "value": value
    })
  }
  return (
    <NoteContext.Provider value={{state, value, update}}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;
