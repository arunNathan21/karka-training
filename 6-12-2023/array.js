//include() array

// const fts = ["banana","ang","al","mang"];
// fts.includes("mang")
// // fts.includes("mang")
// console.log(fts.includes("mang")); //star

// // includes () string
// let txt = "hll ld ,lcm t th nvs"
// let slt = txt.includes("ld");
// let slt1 = txt.includes("ld",12)
// console.log(slt);
// console.log(slt1);

// let a = ["al","ang"]
// const b = a.keys()
// for (const k of b) {
//     console.log(k);
// }
// Array keys
// let a = { 
//     a:1,
//     b:2,
//     c:3
// }
// const b = Object.keys(a)
// for (const k of b) {
//     console.log(k);
// }

// jasn acnt

// let a = '{"name":"jhn","age":30,"cty":"newyk"}'
// let b = JSON.parse(a)
// console.log(b);

// let a= {name: "asfd",age: 21, city: "newyk"}
// let b = JSON.stringify(a)
// console.log(b);

try {
    Num = prompt("enter a positive number")
    if (Num<=0) {
        throw "enter only a positive number";
    } 
    if (isNaN(Num)) {
        throw "enter only a valid number";
        
    }
    console.log(Num + 2);
} catch (error) {
    console.log(error);
}
