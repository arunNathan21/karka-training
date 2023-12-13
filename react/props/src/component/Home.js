import React from 'react'
import { About } from './About'

export const Home= () =>{
    const name ="Arun"
    const age ="27"
    const degree= "E.C.E"
    const place = "Monday Market"
    // const jsonData = {
    //     name: "Arun",
    //     age : "27",
    //     degree : "E.C.E",
    //     place : "Monday Market"
    // }
    return (
        <>
            <div>Home</div>
            <About Myname={name} Myage={age}  Mydegree={degree} Myplace={place}/>

        </>
    )
}
