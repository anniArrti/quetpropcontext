import { useState, useEffect, useRef, useCallback } from "react";
import ChildTodo from "./childTodo";
const TodoRef = () => {
  const inputElement = useRef();
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const count = useRef(0);
  const handleClick = () => {
    inputElement.current.focus();
    setInputValue('')
    setTodos([...todos, inputValue]);
  }
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  useEffect(() => { 
    count.current = count.current + 1;
  });

  return (
    <>
      <ChildTodo todos={todos} addTodo={addTodo} />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={inputElement}
      />
      <button onClick={handleClick}>Click</button>
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default TodoRef;
