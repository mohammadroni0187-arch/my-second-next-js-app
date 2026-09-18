'use client';

import React, { useState } from 'react';

const Counter = () => {
  const [isCount, setIsCount]=useState(0);


  // const handleIncrease =()=>{
  //   console.log('Increase Button clicked')
    
  // }
  return (
    <div>
      <h2 className='text-4xl font-bold mb-4'> Counter</h2>

      <button 
      onClick={()=> setIsCount(isCount+1)}
      
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>increase</button>
    </div>
  );
};

export default Counter;