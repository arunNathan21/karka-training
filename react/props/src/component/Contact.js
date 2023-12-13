import React from 'react'

export const Contact= (props) =>{
    // console.log(props);
    // console.log(props.Myname);
    return (
        <>
        <div>About</div>
        <div>{props.Myname} </div>
        <div>{props.Myage}</div>
        </>
    )
}