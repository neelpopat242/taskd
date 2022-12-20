import React, { useState } from "react";

const Q4 = () => {
  const [val, setval] = useState("");

  return (
    <div>
      <div
        style={{ position : "absolute" , top: "50%", left: "50%"}}
      >
        <input
          type="text"
          value={val}
          style={{ width: "150px", height: "22px", marginLeft: "-75px", marginTop: "-11px" }}
          onChange={(e) => setval(e.target.value)}
        />
      </div>
      <div style={{position : "absolute", left : "0%"  }}>
        <span>{val}</span>
      </div>
      <div style={{position : "absolute" , right : "0%"}}>
        <span>{val}</span>
      </div>
      <div style={{position : "absolute" , bottom : "0%"}}>
        <span>{val}</span>
      </div>
      <div style={{ position : "absolute", bottom : "0%", right : "0%"}}>
        <span>{val}</span>
      </div>
    </div>
  );
};

export default Q4;
