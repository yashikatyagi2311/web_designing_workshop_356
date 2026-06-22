import React, {useState} from "react"; 
function App(){ 
  const [count,setCount]=useState(0); 
  const increment = () => { 
    setCount(count+1); 
  }; 
   const decrement = () => { 
    setCount(count-1); 
  }; 
  const reset = () =>{ 
    setCount(0); 
  }; 
  return( 
    <div className="container"> 
      <h1>React Counter Application</h1> 
      <h2 className="count">{count}</h2> 
      <div className="button"> 
        <button onClick={increment}>increment (+)</button> 
        <button onClick={decrement}>decrement (-)</button> 
        <button onClick={reset}>reset</button> 
      </div> 
    </div> 
 
  ); 
} 
export default App; 