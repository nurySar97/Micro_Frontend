import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const onHandleClick = operation => () => {
    if (operation === '+') {
      setCounter(prev => prev + 1)
    } else if(operation === '-'){
      setCounter(prev => prev - 1);
    }
  }

  return (
    <div style={{
      margin: "10px",
      padding: "10px",
      textAlign: "center",
      backgroundColor: "cyan"
    }}>
      <h1 >App 2</h1>
      <h2>{counter}</h2>
      <h3>
        <button onClick={onHandleClick('+')}>Increment</button>
      </h3>
      <h3>
        <button onClick={onHandleClick('-')}>Decrement</button>
      </h3>
    </div>
  )
}

export default App;