import React from 'react';
import { Probschild } from './Probschild';

export const Probsname=()=>{
    const name = "greeting message "
    return(
        <>
        <div>Probsname</div>
            <Probschild Myname={name}/>
        
        </>
    )
}