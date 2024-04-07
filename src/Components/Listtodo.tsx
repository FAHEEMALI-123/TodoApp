import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";
import Moment from "react-moment";
import Input from "./Input";

type items = {
  id: string;
  title: string;
};
type itemslist = {
  itemss: items[];
  SetItems: React.Dispatch<React.SetStateAction<items[]>>;
};

const Listtodo = ({ itemss, SetItems }: itemslist) => {

  const handledelete = (id: string) => {
    SetItems((prev) => prev.filter((data) => data.id !== id));
  };

  const handleedit = (id: string, title: string) => {
    SetItems((prev) => prev.map((data) => (data.id === id ? { id, title: title } : data)));
  };

  return (
    <div>
      {itemss.map((data) => (
        <TodoListItem key={data.id} data={data} handleedit={handleedit} handledelete={handledelete} />
      ))}
    </div>
  );
};

export default Listtodo;

const TodoListItem = ({
  data,
  handleedit,
  handledelete,
}: {
  data: items;
  handleedit: (id: string, title: string) => void;
  handledelete: (id: string) => void;
}) => {
  // isEditMode
  const [isEditMode, setIsEditMode] = useState(false);
  const [input, SetInput] = useState(data.title);

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input) return;

    handleedit(data.id, input);
    SetInput("");
    setIsEditMode(false);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-3">
      <div className="card-body">
        {isEditMode ? (
          <form onSubmit={handlesubmit} >

          <label className="input input-bordered flex items-center gap-2 mb-4">
            Todo
            <Input type="text" input={input} SetInput={SetInput} className="grow" placeholder="Your Todo here" />
          </label>
          </form>
        ) : (
          <h2 className="card-title">{data.title}</h2>
        )}
        <p>
          <Moment fromNow>{new Date(data.id).toISOString()}</Moment>
        </p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm"
            onClick={() => {
              setIsEditMode(!isEditMode);
            }}
          >
            <MdEdit /> Edit
          </button>
          <button className="btn btn-sm" onClick={() => handledelete(data.id)}>
            <MdDelete />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
