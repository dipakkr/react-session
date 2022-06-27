import { useEffect, useState } from "react";

const Dynamic = () => {


 const [counter, setCounter]  =useState(0);

 
 function triggerUseEffect(){

 }

 // if you keep array empty
 useEffect(()=> {
    
    triggerUseEffect();

 }, [counter]);

 const handleClick = () => {
    setCounter(counter + 1);
 }

  return (
    <>
      <h1> component - Dynamic </h1>

      <h3> {counter }</h3>

      <button onClick={handleClick}> + </button>

    
    </>
  );
};

export default Dynamic;
