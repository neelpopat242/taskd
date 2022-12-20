import React, { useState } from 'react'

const Q2 = () => {
    const [object, setObject] = useState([]);
    console.log(object);
    const changeX = (e, ind) => {
        let temp = [...object];
        temp[ind].name = e.target.value;
        setObject(temp);
    }

    const addY = (ind) => {
        let temp = [...object];
        temp[ind].data.push("");
        setObject(temp);
    }

    const changeY = (e, ind, ind2) => {
        let temp = [...object];
        temp[ind].data[ind2] = e.target.value;
        setObject(temp);
    }
  return (
    <div>
        <button type="button" onClick={() => setObject([...object, {name : "name" , data : []}])}> Add </button>
        
        <div>
            {object.map((obj, ind) => {
                return (
                    <div style={{margin: "16px"}}>
                        <input type="text" value={obj.name} onChange={(e) => changeX(e, ind)} />
                        <h1 onClick={() => addY(ind)}>+</h1>
                        {obj.data.map((dt, ind2) => {
                            return (
                                <div>
                                    <input type="text" value={dt} onChange={(e) => changeY(e, ind, ind2)} />
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Q2