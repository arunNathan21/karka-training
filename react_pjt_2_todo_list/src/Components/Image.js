import React from "react";
import { Home } from "./Home";

const user ={
    name : "msd",
    imageUrl : "./Image/msd.jpg",
    imageSize : 90,
};

export const Image=()=>{
    return(
        <>
            <h1>{user.name}</h1>
            <img src={user.name} alt={'photo of'+ user.name} style={{width: user.imageSize, height: user.imageSize}}/>
            <Home/>
        </>
        
    )
}