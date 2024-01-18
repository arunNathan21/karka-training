import React, { useRef } from "react";

export const Useref=()=>{
    const inpref = useRef(null);

    const handleClick =()=>{
        inpref.current.focus();
    }
    return(
        <>
        <input ref={inpref}/>
        <button onClick={handleClick}>submit</button>

        </>
    )
}