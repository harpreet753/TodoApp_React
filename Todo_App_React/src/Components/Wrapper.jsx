import React from 'react';
import Header from './Header';
import UserInput from './UserInput';
import TodoItems from './TodoItems';
import { useState } from 'react';

const Wrapper=()=> {

  const [todoItems,setTodoItems] = useState([]);

  const handleAddBtn =(name,date)=>{
    const newItem=[...todoItems,{name:name,date:date}];
    setTodoItems(newItem);
  }
  const handleDeleteBtn =(todoname)=>{
    const newTodo=todoItems.filter(item=>item.name !==todoname);
    setTodoItems(newTodo);
  }

  return (
    <>
      <Header/>
      <UserInput handleAddBtn={handleAddBtn} />

      {todoItems.length === 0 &&
       <h1 className='text-center text-sm text-white font-serif pt-5'>All tasks Done. Great Job !</h1> }

      <TodoItems data={todoItems} handleDeleteBtn={handleDeleteBtn}/>

    </>
  )
}

export default Wrapper;
