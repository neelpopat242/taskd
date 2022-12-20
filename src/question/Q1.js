import React, { useState } from 'react'

const Q1 = () => {
    const [num, setNum] = useState(1);
    const [num2, setNum2] = useState(1);
  return (
    <div>
        <h1>{ num%2===1 ? (num*num + 1) : (num*num - 1) }</h1>
        <input type="text" onChange={(i) => setNum2(i.target.value)} />
        <button onClick={() => setNum(num2)}>Submit</button>
    </div>
  )
}

export default Q1