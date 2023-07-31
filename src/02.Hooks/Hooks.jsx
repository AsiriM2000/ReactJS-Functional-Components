import React, { useState } from "react";

export default function Hooks(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click Here!</button>
            <p>Click Count is {count}</p>
        </div>
    );
}