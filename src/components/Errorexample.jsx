import React from 'react'

const Errorexample = () => {
  let count = 0;
  const handleClick = () =>{
    count = count +1 ;
    console.log(count)
  };

  return (
    <div className='count'><h2>{count}</h2>
    <button type='button' className='btn' onClick={handleClick}>increase</button>
    </div>
    
  )

}
export default Errorexample;