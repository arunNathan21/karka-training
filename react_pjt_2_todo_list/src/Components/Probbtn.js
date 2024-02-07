import React from "react";
import { Button } from "./Button";


export const Probbtn=()=>{
    
    function submitHandle () {
        console.log(10);
    }
    return(
        <>
            <Button myData={submitHandle}/>
        </>
    )
}