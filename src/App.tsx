import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import "./Components/ImageHeader";
import ImageHeader from "./Components/ImageHeader";
import Input from "./Components/Input";
import Listtodo from "./Components/Listtodo";

function App() {
  const[items,SetItems]=useState<items[]>([]);
  const[input,SetInput]=useState<string>("");

type items={
  id:string;
  title:string;
}

   const handlesubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    SetItems((prev)=>[...prev,{title:input,id:Date.now().toString()}]);
    SetInput(""); 
  }

 
 
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />

      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handlesubmit}>
          <Input type="text" input={input} SetInput={SetInput} />
'         <button type="submit" className="bg-gray-700 w-full p-2">
            Add
          </button>
        </form>
        <Listtodo itemss={items} SetItems={SetItems} />
          
      </div>
    </div>
  );
}

export default App;
