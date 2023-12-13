import React from "react";
import { Colorchild } from "./Colorchild";

export const Color = () => {

    const divStyle = {
        color: 'blue',
        fontSize: '20px',
        border: '1px solid black'
      };

    return (

        <>
            <div style={divStyle}>Color</div>
            <Colorchild/>
        </>
    )
}