import React from 'react';
import Line from './Line';

const Header=()=> {
  return (
    <>
    <div className='flex  justify-center pt-4'>
      <h1  className='text-white text-2xl font-serif font-semibold'>
        TODO App
      </h1>
    </div>
    <Line />
    </>
  )
};

export default Header;
