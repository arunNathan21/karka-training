import React from "react";
import { Counter } from "./Counter";

export const Counterprops = () => {
    let n = 0;
    n=+1;
    console.log(n);
    return(
        <>
            <Counter letcount ={n}/>
        </>
    )
}


