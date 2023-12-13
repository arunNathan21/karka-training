import React from "react";
import { Table } from "./Table";


export const Tableprob = () =>{

    let arr = [{
        name : "arun",
        age : "26",
        place : "ngl"
    },{
        name : "james",
        age : "23",
        place : "ngl"
    },{
        name : "satheesh",
        age : "18",
        place : "ngl"
    },{
        name : "Ajay",
        age : "22",
        place : "ngl"
    }]

    return(
        <>
        <Table data1={arr}/>
        </>
    )
}


