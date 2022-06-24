import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoData, setTodoData] = useState([]);

  // added to track any change in input component
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    console.log("Current value of Input - " + input);
    todoData.push(input);
    setTodoData(todoData);
    console.log(todoData);
    setInput('')
  };

  return (
    <>
      <input text="input" value={input} onChange={handleChange} />

      <button onClick={handleClick}> Submit </button>

      {todoData.map((item, index) => (
        <p key={index}> {item} </p>
      ))}
    </>
  );
};
export default Todo;
