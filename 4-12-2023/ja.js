// const array = [1, 2, 3, 4]

// const reversedArray = []

// for(let i = array.length - 1; i >= 0; i--) {
//   const valueAtIndex = array[i]

//   reversedArray.push(valueAtIndex)
// }


// console.log(reversedArray);

let arr = [1,3,4,6,7,4,7,8,10,3];
 
let b = [];
 
for (let i = 0; i < arr.length; i++) {
    if (b.indexOf(arr[i]) === -1) {
        b.push(arr[i]);
    }
}
 
console.log(b);

    // let n=prompt("Enter any number")
    // for (let i=1;i<=n;i++){
    //     if(i%3==0 && i%5==0){
    //         console.log("FizzBuzz")
    //     }
    //     else if(i%3==0){
    //         console.log("Fizz")
    //     }
    //     else if(i%5==0){
    //         console.log("Buzz")
    //     }
    // }

    // let a=[10,33,44,67]
    // let b=[45,33,36,97]
    // let c=[]
    // for (let i=0;i<=a.length-1;i++){
    //     for (let j=0;j<=b.length-1;j++){
    //         if(a[i]==b[j]){
    //             c.push(a[i])
    //         }
    //     }
    // }
    // console.log(c);

//     let a=[1,4,6,7,8]
//     let b=[6,5,7,8,4]
//     let c=[]
//     for(let i=0;i<=a.length-1;i++){
//         c.push(a[i]+b[i])
//     }
// console.log(c)

// let n=prompt("Enter any number")
//     let a=[1,2,3,4,5]
//     for(let i=0;i<=a.length;i++){
//         if(a[i]==n){
//             a.splice(i,1)
//         }
//     }
//     console.log(a)

// let a=[0,1,0,4,0,7,6]
//     for(let i=0;i<=a.length-1;i++){
//         if(a[i]==0){
//             a.splice(i,1)
//             a.push(0)
//         }
//     }
//     console.log(a)
