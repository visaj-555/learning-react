import { useState } from "react";
import "./EV.css";
 

export const State = () => {
  //   let value = 0;

  //   const handleClick = () => {
  //     value++;
  //     console.log(value);
  //   };

  const [count, setCount] = useState(0);

  const setButtonClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={setButtonClick}>Click Me</button>
    </div>
  );
};
