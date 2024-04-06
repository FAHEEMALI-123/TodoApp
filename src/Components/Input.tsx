import React from "react";

type input={
    input:string;
    SetInput:React.Dispatch<React.SetStateAction<string>>;
    type:"text"|"color"|"checkbox";
}
function Input({type,input,SetInput}:input) {
  return (
    
      <input
        type={type}
        value={input}
        className="w-full p-2 rounded-sm mb-2"
        onChange={(event) => SetInput(event.target.value)}
      ></input>
   
  );
}

export default Input;
