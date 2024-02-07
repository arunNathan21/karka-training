import React from "react";
import { Page2 } from "./Page2";

export const Page1=()=>{
    let name = "Arun";
    let place ="ngl"
    return(
        <>
            <div>
                <Page2 myName={name} myPlace={place}/>
            </div>
        </>
    )
}