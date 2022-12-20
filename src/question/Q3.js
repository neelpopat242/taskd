import React, { useState } from "react";

const Q3 = () => {
  const [numobj, setnumobj] = useState([]);
  const [len, setLen] = useState(1);
  

  const addtoobj = () => {
    setnumobj([
      ...numobj,
      {
        ["phonenumber" + len]: "",
      },
    ]);
    setLen(len + 1);

    
  };
  const printobj = () => {
    console.log(numobj);
  };
  const deleteobj = (e, item) => {
    let newobj = [...numobj];
    
    newobj = newobj.filter((i) => i !== item);
    setnumobj(newobj);
  };

  const setNumFunc = (e, item) => {
    
    let newobj = [...numobj];
    newobj = newobj.map((obj) => {
      if (obj === item) {
        obj[Object.keys(item)[0]] = e.target.value;
        return obj;
      } else {
        return obj;
      }
    });
    // newobj[i]["phonenumber" + (i+1)] = e.target.value
    setnumobj(newobj);
  };

  return (
    <div>
      {numobj.map((item, ind) => {
        return (
          <>
            <br />
            <input
              type="number"
              value={Object.values(numobj[ind])[0]}
              onChange={(e) => setNumFunc(e, item)}
            />
            {
                numobj.length > 1 ?<button type="button" onClick={(e) => deleteobj(e, item)}>
                Delete
              </button> : ""
            }
              
            

            <br />
          </>
        );
      })}
      
      {/* <input type="number" value={currnum} onChange={(e)=>setcurrnum(e.target.value)} /> */}
      <br />
      <button type="button" onClick={addtoobj}>
        Add another phone number
      </button>
      <br />
      <button type="submit" onClick={printobj}>
        Submit{" "}
      </button>
    </div>
  );
};

export default Q3;
