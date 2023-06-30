import React, { useState } from 'react'

const UseStatebasic = () => {
    
const [count, setCount] = useState(0)

const handleClick = () =>{
   setCount(count +1 )
   console.log(count + 1)
}

  return (
    <div>
      
       <h4>you clicked {count} times /useState/ </h4> 
       <button type='button' onClick={handleClick}>click</button>
    </div> 
  )
}

export default UseStatebasic