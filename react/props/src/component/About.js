import React from 'react'

export const About= (props) =>{
    // console.log(props);
    // console.log(props.Myname);
    return (
        <>
        <div>About</div>
        <div>{props.Myname} </div>
        <div>{props.Myage}</div>
        <div>{props.Mydata}</div>
        <div>{props.Mydegree}</div>
        <div>{props.Myplace}</div>
        </>
    )
}