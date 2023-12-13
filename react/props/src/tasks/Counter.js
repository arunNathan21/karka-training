import React from 'react'

export const Counter = () => {
    return(
        <>
            <button onClick={cd}>Counter +</button>
            <button onClick={decreament}>Counter -</button>
            
        </>
    )
    
}

let n = 0;
const increament = () => {
   
    n=+1;
    console.log(n);
}
let h = 0;
const decreament = () => {
   
    h=-1;
    console.log(h);
}