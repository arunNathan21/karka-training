// let name = "Arun"
// let age= 27
// let qualification = "B.E"

// let text = `hai I am ${name} my age is ${age} and I completed ${qualification}`
// // document.getElementById("demo").innerHTML = text;
// console.log(text);

// Arrow function

// const add = (a,b) => {
//     // c=a+b
//     // return c
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
// }
// add(10,20);
// console.log(c);


//spread operator 

// const a = [1,2,3,4]
// const b = [5,6,7,8]

// const c = [...a, ...b]

// console.log(c);


// const a = {
//     brand : 'ford',
//     model : 'sdfsfd',
//     color : 'asdfdf'
// }
// const b = {
//     type : 'ford',
//     year : 'sdfsfd',
//     color2 : 'asdfdf'
// }
// reduce
// const myvech ={...a, ...b}
// console.log(myvech);

// const number = [1,2,3,4,5]
// const sum = number.reduce((accumulator,currentval)=>{
//     return accumulator + currentval
// },0)

// console.log(sum);

// const num = [[1,2],[3,4],[5,6]]

// const res = num.reduce((acc,cur)=>
//     [...acc, ...cur]

// ,[])
// console.log(res);

//index of()

// let product = ["mobile","laptop","iphn","mobile"]
// // let lin = product.indexOf("iphn")
// let links = product.lastIndexOf("mobile")
// console.log(links);


// const fruits = new Map([["apple","500"],["banana","300"],["orange","200"]]);
// //  document.getElementById("demo").innerHTML=fruits.get("apple")
// document.getElementById("demo").innerHTML=fruits.set("apple",400)
// // console.log(fruits.set("apple",400));

 const people = [
    {
        name: "ajay",age : 22
    },
    {
        name : "mahathi", age : 17
    },
    {
        name : "jemil", age : 23
    }
 ]
 const peopleMapping = people.map(person=>({...person, isAdult : person.age >=18}))
 console.log(peopleMapping);







