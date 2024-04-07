import React, { useState } from "react";
import logo from "./logo.svg";

import "./App.css";
import "./Components/ImageHeader";
import ImageHeader from "./Components/ImageHeader";
import Input from "./Components/Input";
import Listtodo from "./Components/Listtodo";

function App() {
  const [items, SetItems] = useState<items[]>([]);
  const [input, SetInput] = useState<string>("");

  type items = {
    id: string;
    title: string;
  };

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input) return;

    SetItems((prev) => [ { title: input, id: new Date().toString() }, ...prev]);
    SetInput("");
  };

  return (
    <div className=" flex flex-col items-center ">
      <ImageHeader />

      <div className="w-[350px]">
        <form className="mb-5" onSubmit={handlesubmit}>
          <label className="input input-bordered flex items-center gap-2 mb-4">
            Todo
            <Input type="text" input={input} SetInput={SetInput} className="grow" placeholder="Your Todo here" />
          </label>
          
          <button type="submit" className="btn btn-outline">
            Add
          </button>
        </form>
        <Listtodo itemss={items} SetItems={SetItems} />
      </div>
    </div>
  );
}

export default App;
