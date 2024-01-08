import React from "react";

export const Hello=async()=>{
    const A = await "hello"
    console.log(A);
}

console.log(1);
Hello();
console.log(2);
