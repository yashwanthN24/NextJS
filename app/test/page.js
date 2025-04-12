"use client"

import { useState } from "react"


const Test = () => {
  const [count, setcount] = useState(0)
  return (
    <>
    <div>Count is {count}</div>
    <button onClick={()=> setcount(count+1)}>Click Me</button>
    
    </>
  )
}
export default Test