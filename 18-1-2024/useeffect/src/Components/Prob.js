import React, { useRef } from "react";
import { Input } from "./Input";

export const Prob =()=>{

    const inputRef = useRef(null);

    const handleClick=()=>{
        inputRef.current.focus();
    }


    return(
        <>
            <Input ref ={inputRef}/>
            <button onClick={handleClick}>Focus the input</button>
        </>
    )
}