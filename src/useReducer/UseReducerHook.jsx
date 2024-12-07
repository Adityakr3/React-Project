import React, { useReducer } from 'react'
import { myReducer } from './CountReducer'
const UseReducerHook = () => {
    const [count , dispatch] = useReducer(myReducer,0)
  return (
    <div>
        <h1>This Is UseReducer Hook</h1>
       <h1>{count}</h1>
       <button style={{padding:"12px 24px" , margin:"4px"}} onClick ={()=>{
        dispatch({type:"inc1"})
       }}> + </button>
         <button style={{padding:"12px 24px",margin:"4px"}} onClick ={()=>{
        dispatch({type:"dec1"})}}> - </button>
    </div>
  )
}

export default UseReducerHook
