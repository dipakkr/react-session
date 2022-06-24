import { useState } from "react";
import FooterTop from "./Footer/FooterTop";

function Footer(props){

  // first argument - initial state 
  // second argument - setTitle will take updated value of state

  const [title, setTitle] = useState('Title');
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
    setTitle(`91wheels - ${counter}`);
  }


    return(
      <>
        <h1> {title}</h1>

        <button onClick={handleClick}> Change Text </button>



       
      </>
      )
  }

  export default Footer;