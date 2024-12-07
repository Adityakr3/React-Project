import React, { useState } from 'react'

const Child1 = () => {
    const[count , setCount] = useState(0)
    const add = () =>{
        setCount(count+1)
    }
    const sub = () =>{
        setCount(count-1)
    }
  return (
    <div>
        <h1>This is child1</h1>
         <h1>{count}</h1>
         <button style={{padding:"12px 24px" , margin:"4px"}} onClick ={add}> + </button>
         <button style={{padding:"12px 24px",margin:"4px"}} onClick={sub}> - </button>
    </div>
  )
}

export default Child1
