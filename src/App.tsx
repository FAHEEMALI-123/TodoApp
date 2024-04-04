import React, { useState } from "react";
import logo from "./logo.svg";
import { MdDelete } from "react-icons/md";
import "./App.css";
import "./Components/ImageHeader";
import ImageHeader from "./Components/ImageHeader";

function App() {
  const[items,SetItems]=useState<string[]>([]);
  const[input,SetInput]=useState<string>("");

   const handlesubmit=(e:React.FormEvent)=>{
    e.preventDefault();
    SetItems((prev)=>[...prev,input]);
    SetInput(""); 
  }

  const handledelete=(value:string)=>{
    SetItems((prev)=>prev.filter((data)=> data !==value));
  }
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center">
      <ImageHeader />

      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handlesubmit}>
          <input type="text" value={input} className="w-full p-2 rounded-sm mb-2" onChange={(event)=>SetInput(event.target.value)}></input>
          <button type="submit" className="bg-gray-700 w-full p-2">
            Add
          </button>
        </form>
        {items.map((data)=>(
          <div key={data} className="flex justify-between items-center border slate-600 pl-2 mb-2 mr-1 py-2">
         
          <p>{data}</p>
          <MdDelete onClick={()=>handledelete(data)}/>
        </div>
            ))}
        
          
      </div>
    </div>
  );
}

export default App;
