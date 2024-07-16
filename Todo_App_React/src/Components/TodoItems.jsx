import React from 'react';

function TodoItems({data,handleDeleteBtn}) {
  return (
    <>
      { 
      data.map((item)=>{
      return (
      <div className='flex justify-center pt-3'  key={item.name}>    
        <div className='rounded basis-40  text-white '>
        {item.name}
        </div>
        <div className='rounded basis-32 mx-5 pl-2  text-white'>
        {item.date}
        </div>
          {/* DELETE BUTTON  */}
        <div className='rounded basis-11'>
            <input type="button" value="Delete" 
            className='bg-red-700 text-white text-sm font-semibold rounded px-2 py-1 cursor-pointer' 
            onClick={()=>{ handleDeleteBtn(item.name);}} />
        </div>

      </div>
      )
      })
    }
    
      
    </>
  )
}

export default TodoItems;
