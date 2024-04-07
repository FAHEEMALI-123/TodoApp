import React from "react";

type input={
    input:string;
    SetInput:React.Dispatch<React.SetStateAction<string>>;
    type:"text"|"color"|"checkbox";
    className?:string;
    placeholder?:string;
}
function Input({type,input,SetInput,className,placeholder

}:input) {
  return (
    
      <input
        type={type}
        value={input}
        className={className}
        placeholder={placeholder}
        onChange={(event) => SetInput(event.target.value)}
      ></input>
   
  );
}

export default Input;
