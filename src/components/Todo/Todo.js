import { useEffect, useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoData, setTodoData] = useState([]);

  const [isMatching, setMatching] = useState(false); 


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

  // some particular data is in this array or not. 

  function findMatchingElement(){
     const isMatching = todoData.includes(input);
     setMatching(isMatching);  
  }

  useEffect(()=> {
    console.log('useEffect trigger');
    findMatchingElement();    

  }, [input, todoData]);

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
