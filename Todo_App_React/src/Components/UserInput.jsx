import React from "react";
import  { useState }  from 'react';

function UserInput({handleAddBtn}) {

  const [name,setName]=useState('');
  const [date,setDate]=useState('');

  const handleName =(event)=>{
    setName(event.target.value);
  }
  const handleDate =(event)=>{
    setDate(event.target.value);
  }
  const handleBtn =()=>{
    handleAddBtn(name,date);
    setDate(""); 
    setName("");
  }
  return (
    <>
      <div className="flex justify-center mt-5 ">
        <div>
          <input
           value={name} onChange={handleName}
            type="text"
            placeholder="Enter Todo Here"
            className="rounded bg-slate-950 text-white border-[1px] border-white focus:outline-none placeholder:text-slate-300 placeholder:text-sm text-sm  p-1"
          />
        </div>

        <div className="min-[400px]:px-4 px-2">
          <input
            type="date"
            value={date} onChange={handleDate}
            className="rounded bg-slate-950 text-white border-[1px] border-white focus:outline-none
          text-sm p-1"
          />
        </div>

        <div>
          <input
            type="button"
            value="Add"
            className="text-white text-sm font-semibold bg-green-900 max-[380px]:px-2 px-3.5 py-1.5 rounded cursor-pointer"
            onClick={handleBtn} 
          />
        </div>
      </div>
    </>
  );
}

export default UserInput;
