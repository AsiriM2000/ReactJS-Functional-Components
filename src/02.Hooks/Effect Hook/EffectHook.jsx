import React, { useEffect , useState} from "react";

export default function EffectHook(){
    // 01.
    // useEffect(()=>{
    //    document.title='Effect Hook' 
       
    // })

    // 02.
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); 

    return(
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}