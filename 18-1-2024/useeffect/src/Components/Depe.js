import React, { useEffect, useState } from 'react';


export const Depe=()=>{

    const [count1, setCount1] = useState(0);
    const [count2,setCount2] = useState(0);

    // useEffect(()=>{
    //     console.log('excute'); //excute all time
    // })

    // useEffect(()=>{
    //     console.log('excute'); // excute only dependency is added
    // },[count2])

    useEffect(()=>{
        console.log('excute'); // no execution
    },[])
    

    
    return(
        <>
        <button onClick={()=>setCount1(count1 + 1)}>increament</button>
        <button onClick={()=>setCount2(count2 + 1)}>decreament</button>
            
        </>
    )
}