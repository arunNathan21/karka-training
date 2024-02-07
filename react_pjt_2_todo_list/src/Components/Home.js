import React, { useState } from 'react';

export const Home=()=>{

    const [count, setCount] = useState(0);
    
    function handleClick(){
        setCount(count+1)
    }
    return(
        <>
            <button onClick={handleClick}>my button{count}</button>
        </>
    )
}