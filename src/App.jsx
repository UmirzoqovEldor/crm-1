import React from "react";
import { useReducer,useState } from "react";


export default function () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [counter,dispetch] = useReducer((state,action)=>{
   switch (action.type) {
    case 'plus':return state+1;
      
    case 'minus':return state-1;
    case 'besh':return state+5;

    default:return state
     
   }
  },0)
  return (
    <div>
      <h1 style={{ display: "inline" }}>Count</h1>
      <span style={{fontSize:"30px"}}>{count}</span>
      <br />
      <h2 style={{ display: "inline" }}>Nmae</h2>
      {name}
      <br />
      <h2 style={{ display: "inline" }}>Counter</h2>
      {counter}
      <input
        type="text"
        onChange={({ target }) => setName(target.value)}
        placeholder="name..."
      />
      <br />
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>dispetch({type:'plus'})}>+</button>
      <button onClick={()=>dispetch({type:'minus'})}>-</button>
      <button onClick={()=>dispetch({type:'besh'})}>5</button>
    </div>
  );
}
