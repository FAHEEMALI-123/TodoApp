import React from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from 'react';


type items={
  id:string;
  title:string;
}
type itemslist={
 itemss:items[];
 SetItems:React.Dispatch<React.SetStateAction<items[]>>;

}

const Listtodo=({itemss,SetItems}:itemslist)=> {

  const[notedit,SetViewEdit]=useState<boolean>(false);

  const handledelete=(id:string)=>{
    SetItems((prev)=>prev.filter((data)=> data.id !==id));
  }

  const handleedit=(id:string)=>{
    SetViewEdit(true)
  }

 
  return (
  <div>
    
    {itemss.map((data)=>(
      
        <div key={data.id} className="flex justify-between items-center border slate-600 pl-2 mb-2 mr-1 py-2">
         
        <p>{data.title}</p>
        
        <span className="flex">
        <MdEdit onClick={()=>handleedit(data.id)}/>
        <MdDelete onClick={()=>handledelete(data.id)}/>
        </span>
        
      </div>
      
          ))}
          </div>
    
      
  );
}

export default Listtodo;
